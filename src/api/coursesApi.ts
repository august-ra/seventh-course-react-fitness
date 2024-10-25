import { get, ref } from "firebase/database"
import { db } from "./firebaseConfig"

import type { CoursesType, CourseType, WorkoutsType } from "../types/types"
import type { UserDataType } from "../types/types"
import { fillUserFieldsInCourse } from "../utils/progress"


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
}
