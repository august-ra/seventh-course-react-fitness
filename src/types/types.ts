import { sharedStyles } from "../sharedStyles"


export type KeysType = keyof typeof sharedStyles

export type ModalKindType = "signIn" | "signUp" | "signOut" | "resetStart" | "resetEnd"

/* back-end data's type: read */

export interface CourseType {
  /* for main page */
  _id:         string
  name:        string
  title:       string
  difficulty:  number
  order:       number
  /* for course page */
  description: string
  directions:  string[]
  fitting:     string[]
  workouts:    string[]
  max:         number
  /* for user */
  progress:    number
  isAdded:     boolean
}

export type CoursesType = CourseType[]

export interface WorkoutType {
  _id:       string
  name:      string
  video:     string
  exercises: ExercisesType
}

export type WorkoutsType = WorkoutType[]

export interface ExerciseType {
  name:     string
  quantity: number
}

export type ExercisesType = ExerciseType[]

/* back-end data's type: write */

export interface UserDataType {
  [key: string]: {
    _id: string
    workouts: {
      [key: string]: {
        _id: string
        exercises: {
          index: number
          quantity: number
          progress: number
        }[]
      }
    }
  }
}
