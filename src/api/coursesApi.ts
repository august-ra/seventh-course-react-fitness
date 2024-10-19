import { get, ref } from "firebase/database"
import { db } from "./firebaseConfig"

import type { CoursesType } from "../types/types"


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
}
