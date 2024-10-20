import { get, ref } from "firebase/database"
import { db } from "./firebaseConfig"

import type { CoursesType, CourseType } from "../types/types"


export const coursesAPI = {
  async getCourses(): Promise<CoursesType> {
    try {
      const path     = "courses"
      const snapshot = await get(ref(db, path))

      if (!snapshot.exists())
        return []

      const data: CoursesType = Object.values(snapshot.val())
      data.sort((lhs, rhs) => lhs.order - rhs.order)

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
}
