import type { CourseType, UserDataType, WorkoutsType } from "../types/types"


interface TestingDataType {
  courseData: CourseType
  workoutsData: WorkoutsType
  userData: UserDataType
  workoutsData2: WorkoutsType
  userData2: UserDataType
  init: () => void
  prepareTest2: () => void
  prepareTest3: () => void
  prepareTest5: () => void
  prepareTest6: () => void
}

export const data: TestingDataType = {
  courseData: getCourseData(),
  workoutsData: getWorkoutData1(),
  userData: getUserData1(),
  workoutsData2: getWorkoutData2(),
  userData2: getUserData2(),

  init() {
    this.courseData = getCourseData()
    this.workoutsData = getWorkoutData1()
    this.userData = getUserData1()
    this.workoutsData2 = getWorkoutData2()
    this.userData2 = getUserData2()
  },

  prepareTest2() {
    const inner = this.userData.course_0.workouts?.workout_1.exercises

    if (inner)
      inner[1].progress = 20
  },

  prepareTest3() {
    const inner = this.userData.course_0.workouts?.workout_2.exercises

    if (inner)
      inner[1].progress = 0
  },

  prepareTest5() {
    const inner = this.userData2.course_0.workouts?.workout_2

    if (inner)
      inner.progress = 1
  },

  prepareTest6() {
    const inner = this.userData2.course_0.workouts?.workout_1

    if (inner)
      inner.progress = 0
  },
}

function getCourseData(): CourseType {
  return {
    _id:         "course_0",
    name:        "test",
    title:       "test",
    difficulty:  3,
    order:       0,
    description: "test",
    directions:  ["test"],
    fitting:     ["test"],
    workouts:    ["workout_1", "workout_2"],
    isAdded:     true,
    progress:    0,
    max:         0,
  }
}

function getWorkoutData1(): WorkoutsType {
  return [
    {
      _id:         "workout_1",
      name:        "test #1",
      video:       "test.ru/video_1",
      exercises:   [
        {
          name:     "first",
          quantity: 10,
          progress: 0,
        },
        {
          name:     "second",
          quantity: 20,
          progress: 0,
        },
      ],
      courseName:  "test",
      day:         1,
      max:         0,
      progress:    0,
    },
    {
      _id:         "workout_2",
      name:        "test #2",
      video:       "test.ru/video_2",
      exercises:   [
        {
          name:     "third",
          quantity: 10,
          progress: 0,
        },
        {
          name:     "forth",
          quantity: 5,
          progress: 0,
        },
        {
          name:     "fifth",
          quantity: 15,
          progress: 0,
        },
      ],
      courseName:  "test",
      day:         2,
      max:         0,
      progress:    0,
    },
  ]
}

function getWorkoutData2(): WorkoutsType {
  return [
    {
      _id:         "workout_1",
      name:        "test #1",
      video:       "test.ru/video_1",
      courseName:  "test",
      day:         1,
      max:         0,
      progress:    0,
    },
    {
      _id:         "workout_2",
      name:        "test #2",
      video:       "test.ru/video_2",
      courseName:  "test",
      day:         2,
      max:         0,
      progress:    0,
    },
  ]
}

function getUserData1(): UserDataType {
  return {
    "course_0": {
      _id: "course_0",
      workouts: {
        "workout_1": {
          _id: "workout_1",
          exercises: [
            {
              index:     0,
              progress: 10,
            },
            {
              index:     1,
              progress: 15,
            },
          ],
        },
        "workout_2": {
          _id: "workout_2",
          exercises: [
            {
              index:     0,
              progress: 10,
            },
            {
              index:     1,
              progress:  5,
            },
            {
              index:     2,
              progress: 15,
            },
          ],
        },
      },
    },
  }
}

function getUserData2(): UserDataType {
  return {
    "course_0": {
      _id: "course_0",
      workouts: {
        "workout_1": {
          _id:      "workout_1",
          progress: 1,
        },
        "workout_2": {
          _id:      "workout_2",
          progress: 0,
        },
      },
    },
  }
}
