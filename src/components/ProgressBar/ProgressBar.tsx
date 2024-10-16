import { sharedStyles } from "../../sharedStyles"


export default function ProgressBar() {
  return (
    <div className={sharedStyles.progressBar}>
      <div className={sharedStyles.progressBarBack} />
      <div className={sharedStyles.progressBarFront} />
    </div>
  )
}
