
export function getActionFromProgress(progress: number): string {
  if (progress >= 100)
    return "Начать заново"
  else if (progress > 0)
    return "Продолжить"
  else
    return "Начать тренировки"
}
