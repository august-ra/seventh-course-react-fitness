import { CourseType, UserDataType, WorkoutsType } from "../types/types"


export function getRate(progress: number, max: number) {
  return Math.ceil(100 * progress / max)
}


export function getActionFromProgress(progress: number): string {
  if (progress >= 100)
    return "Начать заново"
  else if (progress > 0)
    return "Продолжить"
  else
    return "Начать тренировки"
}


export function fillUserFieldsInCourse(course: CourseType, workoutsData: WorkoutsType, userData: UserDataType) {
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
}

export function getProgressInsideUserData(userData: UserDataType, courseId: string, workoutId: string): number {
  let progress = 0

  const dataCourse = userData[courseId]

  if (!dataCourse)
    return progress

  const dataWorkout = dataCourse.workouts[workoutId]

  if (!dataWorkout)
    return progress

  for (const exercise of dataWorkout.exercises)
    progress += exercise.progress

  return progress
}
