import { get, ref } from "firebase/database"
import { db } from "./firebaseConfig"

import type { CoursesType, CourseType, WorkoutsType } from "../types/types"
import type { UserDataType } from "../types/types"
import { getProgressInsideUserData } from "../utils/progress"


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
            const isAdded = typeof userData[course._id] === "object"

            let progress = 0
            let max      = 0

            for (const workoutId of course.workouts) {
              for (const workout of workoutsData) {
                if (workout._id !== workoutId)
                  continue

                if (workout.exercises)
                  for (const exercise of workout.exercises)
                    max += exercise.quantity

                if (isAdded)
                  progress += getProgressInsideUserData(userData, course._id, workoutId)
              }
            }

            course.isAdded  = isAdded
            course.progress = progress
            course.max      = Math.max(max, 1)
          })
        }
      }

      return data
    } catch (error) {
      console.log(error)
      return []
    }
  },

  async getCourse(courseId: string): Promise<CourseType | null> {
    try {
      const path     = `courses/${courseId}`
      const snapshot = await get(ref(db, path))

      if (!snapshot.exists())
        return null

      return snapshot.val() as CourseType
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
}
