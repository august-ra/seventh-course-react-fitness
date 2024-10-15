import { sharedStyles } from "../../sharedStyles"

import React from "react"


interface Props {
  action: "add" | "remove"
}

function CardAction({ action }: Props) {
  const picture = action === "add" ? "plus" : "minus"

  return (
    <div className={sharedStyles.cardAction}>
      <img className={sharedStyles.cardAddBtn} src={`/img/${picture}.svg`} alt={action} />

      <div className={sharedStyles.cardActionTooltip}>
        {action === "add" ? "Добавить" : "Удалить"} курс
      </div>
    </div>
  )
}

export default React.memo(CardAction)
