import { get, ref } from "firebase/database"
import { db } from "./firebaseConfig"

import type { CoursesType, CourseType, WorkoutsType } from "../types/types"
import type { UserDataType } from "../types/types"
import { fillUserFieldsInCourse, getProgressInsideUserData } from "../utils/progress"


export const coursesAPI = {
  async getCourses(userId: string): Promise<CoursesType> {
    try {
      const path     = "courses"
      const snapshot = await get(ref(db, path))

      if (!snapshot.exists())
        return []

      const data: CoursesType = Object.values(snapshot.val())
      data.sort((lhs, rhs) => lhs.order - rhs.order)

      if (userId) {
        const workoutsData = await coursesAPI.getWorkouts()

        const path     = `/users/${userId}/courses`
        const snapshot = await get(ref(db, path))

        if (snapshot.exists()) {
          const userData: UserDataType = snapshot.val()

          data.forEach((course) => {
            fillUserFieldsInCourse(course, workoutsData, userData)
          })
        }
      }

      return data
    } catch (error) {
      console.log(error)
      return []
    }
  },

  async getCourse(courseId: string, userId: string): Promise<CourseType | null> {
    try {
      const path     = `courses/${courseId}`
      const snapshot = await get(ref(db, path))

      if (!snapshot.exists())
        return null

      const data = snapshot.val() as CourseType

      if (userId) {
        const workoutsData = await coursesAPI.getWorkouts()

        const path     = `/users/${userId}/courses`
        const snapshot = await get(ref(db, path))

        if (snapshot.exists()) {
          const userData: UserDataType = snapshot.val()

          fillUserFieldsInCourse(data, workoutsData, userData)
        }
      }

      return data
    } catch (error) {
      console.log(error)
      return null
    }
  },

  async getWorkouts(): Promise<WorkoutsType> {
    try {
      const path     = "workouts"
      const snapshot = await get(ref(db, path))

      if (!snapshot.exists())
        return []

      return Object.values(snapshot.val())
    } catch (error) {
      console.log(error)
      return []
    }
  },

  async getWorkoutsIntoCourse(courseId: string, userId: string): Promise<WorkoutsType> {
    try {
      const path     = `courses/${courseId}`
      const snapshot = await get(ref(db, path))

      if (!snapshot.exists())
        return []

      const workoutsData = await coursesAPI.getWorkouts()
      const courseData = snapshot.val() as CourseType

      const data: WorkoutsType = courseData.workouts.map((workoutId) => (
        workoutsData.reduce((acc, workout) => workout._id === workoutId ? workout : acc, {})
      ))

      if (userId) {
        const path     = `/users/${userId}/courses`
        const snapshot = await get(ref(db, path))

        if (snapshot.exists()) {
          const userData: UserDataType = snapshot.val()

          for (const workoutData of data) {
            let progress = 0
            let max      = 0

            for (const workout of workoutsData) {
              if (workout._id !== workoutData._id)
                continue

              if (workout.exercises)
                for (const exercise of workout.exercises)
                  max += exercise.quantity

              progress += getProgressInsideUserData(userData, courseId, workoutData._id)
            }

            workoutData.progress   = progress
            workoutData.max        = Math.max(max, 1)
            workoutData.courseName = courseData.title
          }
        }
      }

      return data
    } catch (error) {
      console.log(error)
      return []
    }
  },
}
