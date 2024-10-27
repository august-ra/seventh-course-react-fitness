import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../../components/Button/Button"

import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { WorkoutType } from "../../types/types"


export default function WriteProgressPage() {
  const { courseId, workoutId } = useParams()
  const workoutData = useLoaderData() as WorkoutType
  const navigate = useNavigate()

  if (!workoutData)
    return "There is an error!"

  function handleClose(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).dataset.id === "modal-outside")
      navigate(-1)
  }

  return (
    <div className={sharedStyles.modalWrapper} data-id="modal-outside" onClick={handleClose}>
      <form className={twMerge(sharedStyles.modalForm, sharedStyles.modalFormCompact)}>
        <p className={sharedStyles.modalFormCaption}>Мой прогресс</p>

        <div className={twMerge(sharedStyles.writeProgressScrollingList, (workoutData.exercises?.length || 0) > 3 && sharedStyles.writeProgressScrollingListGapped)}>
          <ul className={sharedStyles.writeProgressList}>
            {
              workoutData.exercises && workoutData.exercises.map((exercise, index) => (
                <div key={index} className={sharedStyles.writeProgressItem}>
                  <p className={sharedStyles.text_18_20}>{exercise.name}</p>
                  <input className={sharedStyles.writeProgressInput} type="number" value={0} />
                </div>
              ))
            }
          </ul>
        </div>

        <Button primary={true} type="submit" additionalClasses={sharedStyles.buttonWide}>Сохранить</Button>
      </form>
    </div>
  )
}
