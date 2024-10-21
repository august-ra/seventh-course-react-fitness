import { sharedStyles } from "../sharedStyles"


export type KeysType = keyof typeof sharedStyles

export type ModalKindType = "signIn" | "signUp" | "signOut" | "resetStart" | "resetEnd"

export type CourseType = {
  _id:         string
  description: string
  directions:  string[]
  difficulty:  number
  fitting:     string[]
  name:        string
  title:       string
  order:       number
  workouts:    string[]
}

export type CoursesType = CourseType[]
