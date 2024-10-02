import { sharedStyles } from "../sharedStyles"


export default function Progress() {
  return (
    <div className={sharedStyles.progress}>
      <div className={sharedStyles.progressBack} />
      <div className={sharedStyles.progressFront} />
    </div>
  )
}
