import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../../components/Button/Button"

import React, { useState } from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { WorkoutsType } from "../../types/types"


export default function ExercisesListPage() {
  const { id } = useParams()
  const [workoutId, setWorkoutId] = useState("")
  const [showError, setShowError] = useState(false)
  const workoutsData = useLoaderData() as WorkoutsType
  const navigate = useNavigate()

  if (!workoutsData)
    return "There is an error!"

  function handleClose(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).dataset.id === "modal-outside")
      navigate(-1)
  }

  function handleSelectWorkout(e: React.MouseEvent<HTMLLIElement>) {
    let target = e.target as HTMLLIElement

    while (target.nodeName !== "LI")
      target = target.parentElement as HTMLLIElement

    setWorkoutId(target.dataset.id || "")
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!workoutId)
      return setShowError(true)

    navigate(`/workout/${id}/${workoutId}/`, { replace: true })
  }

  return (
    <div className={sharedStyles.modalWrapper} data-id="modal-outside" onClick={handleClose}>
      <form className={twMerge(sharedStyles.modalForm, sharedStyles.modalFormCompact)} onSubmit={handleSubmit}>
        <p className={sharedStyles.modalFormCaption}>Выберите тренировку</p>

        <div className={twMerge(sharedStyles.modalScrollingList, workoutsData.length > 5 && sharedStyles.modalScrollingListGapped)}>
          <ul className={sharedStyles.modalList}>
            {
              workoutsData.map((workout, index) => (
                <li key={workout._id} className={sharedStyles.modalListItem} onClick={handleSelectWorkout} data-id={workout._id}>
                  {
                    workout._id === workoutId
                      ? (
                        <img className={sharedStyles.modalListMark} src="/img/mark.svg" alt="mark" />
                      )
                      : (
                        <div className={sharedStyles.modalListEmptyMark} />
                      )
                  }
                  <div className={sharedStyles.modalListItemContent}>
                    <p className={sharedStyles.modalListItemExercise}>{workout.name}</p>
                    <p className={sharedStyles.modalListItemCourse}>{workout.courseName} на каждый день / {index + 1} день </p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        {
          showError
            && (
              <p className={sharedStyles.modalFormError}>Необходимо выбрать тренировку</p>
            )
        }

        <Button primary={true} type="submit" additionalClasses={sharedStyles.buttonWide}>Начать</Button>
      </form>
    </div>
  )
}
