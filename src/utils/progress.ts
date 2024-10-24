import { UserDataType } from "../types/types"


export function getActionFromProgress(progress: number): string {
  if (progress >= 100)
    return "Начать заново"
  else if (progress > 0)
    return "Продолжить"
  else
    return "Начать тренировки"
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
