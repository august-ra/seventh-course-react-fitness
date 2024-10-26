import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../../components/Button/Button"

import React from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { WorkoutsType } from "../../types/types"


export default function ExercisesListPage() {
  const workoutsData = useLoaderData() as WorkoutsType
  const navigate = useNavigate()

  if (!workoutsData)
    return "There is an error!"

  function handleClose(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).dataset.id === "modal-outside")
      navigate(-1)
  }

  debugger

  return (
    <div className={sharedStyles.modalWrapper} data-id="modal-outside" onClick={handleClose}>
      <form className={twMerge(sharedStyles.modalForm, sharedStyles.modalFormCompact)}>
        <p className={sharedStyles.modalFormCaption}>Выберите тренировку</p>

        <div className={twMerge(sharedStyles.modalScrollingList, workoutsData.length > 5 && "pr-[26px]")}>
          <ul className={sharedStyles.modalList}>
            {
              workoutsData.map((workout, index) => (
                <li className={sharedStyles.modalListItem}>
                  {
                    workout.progress // === workout.max
                      ? (
                        <img className={sharedStyles.modalListMark} src="/img/mark.svg" alt="mark" />
                      )
                      : (
                        <div className={sharedStyles.modalListEmptyMark} />
                      )
                  }
                  <div className={sharedStyles.modalListItemContent}>
                    <p className={sharedStyles.modalListItemExercise}>Утренняя практика</p>
                    <p className={sharedStyles.modalListItemCourse}>Йога на каждый день / {index + 1} день </p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <Button primary={true} type="submit" additionalClasses={sharedStyles.buttonWide}>Начать</Button>
      </form>
    </div>
  )
}
