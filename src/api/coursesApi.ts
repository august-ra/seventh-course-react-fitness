import { get, ref } from "firebase/database"
import { db } from "./firebaseConfig"

import type { CoursesType } from "../types/types"


export const coursesAPI = {
  async getCourses(): Promise<CoursesType> {
    try {
      const path     = "courses"
      const snapshot = await get(ref(db, path))

      if (snapshot.exists())
        return Object.values(snapshot.val())

      return []
    } catch (error) {
      console.log(error)
      return []
    }
  },
}
