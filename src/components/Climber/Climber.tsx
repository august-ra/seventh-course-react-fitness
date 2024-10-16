import { sharedStyles } from "../../sharedStyles"

import Button from "../Button/Button"


export default function Climber() {
  return (
    <div className={sharedStyles.climber}>
      <Button primary={true} additionalClasses="w-[127px]">Наверх &#8593;</Button>
    </div>
  )
}
