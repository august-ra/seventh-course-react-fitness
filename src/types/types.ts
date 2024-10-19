import { sharedStyles } from "../sharedStyles"


export type KeysType = keyof typeof sharedStyles

export type CourseType = {
  _id:         string
  description: string
  directions:  string[]
  fitting:     string[]
  nameEN:      string
  nameRU:      string
  order:       number
  workouts:    string[]
}

export type CoursesType = CourseType[]
