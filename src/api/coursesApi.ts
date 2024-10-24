import { get, ref } from "firebase/database"
import { db } from "./firebaseConfig"

import type { CoursesType, CourseType } from "../types/types"


export const coursesAPI = {
  async getCourses(userId: string): Promise<CoursesType> {
    debugger
    try {
      const path     = "courses"
      const snapshot = await get(ref(db, path))

      if (!snapshot.exists())
        return []

      const data: CoursesType = Object.values(snapshot.val())
      data.sort((lhs, rhs) => lhs.order - rhs.order)

      if (userId) {
        const path     = `/users/${userId}/courses`
        const snapshot = await get(ref(db, path))

        if (snapshot.exists()) {
          const userData = snapshot.val()

          data.forEach((course) => {
            course.isAdded  = typeof userData[course._id] === "object"
            course.progress = 0
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
}
