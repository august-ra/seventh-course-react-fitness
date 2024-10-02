import Button from "../Button"

import { sharedStyles } from "../../sharedStyles"


export default function Climber() {
  return (
    <div className={sharedStyles.climber}>
      <Button primary={true} additionalClasses="w-[127px]">Наверх ↑</Button>
    </div>
  )
}
