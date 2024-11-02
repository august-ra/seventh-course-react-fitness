import { sharedStyles } from "../../sharedStyles"
import { normalizeRate } from "../../utils/progress"


interface Props {
  progress: number
}

export default function ProgressBar({ progress }: Props) {
  return (
    <div className={sharedStyles.progressBar}>
      <div className={sharedStyles.progressBarBack} />
      <div className={sharedStyles.progressBarFront} style={{ width: `${normalizeRate(progress, 1, 100)}%` }} />
    </div>
  )
}
