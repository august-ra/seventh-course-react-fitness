import * as M from "./progress"

import { data as D } from "../data/testing"


describe("Test progress.ts", () => {
  describe("do getRate() correctly", () => {
    it("from values #1", () => {
      expect(M.getRate(0, 0)).toEqual(0)
    })
    it("from values #2", () => {
      expect(M.getRate(0, 10)).toEqual(0)
    })
    it("from values #3", () => {
      expect(M.getRate(10, 0)).toEqual(100)
    })
    it("from values #4", () => {
      expect(M.getRate(10, 10)).toEqual(100)
    })
    it("from values #5", () => {
      expect(M.getRate(20, 10)).toEqual(100)
    })
    it("from values #6", () => {
      expect(M.getRate(1, 10)).toEqual(10)
    })
    it("from values #7", () => {
      expect(M.getRate(5, 10)).toEqual(50)
    })
    it("from values #8", () => {
      expect(M.getRate(-10, 10)).toEqual(0)
    })
  })

  describe("do getActionTextFromProgress() correctly", () => {
    it("with adding mark #1", () => {
      expect(M.getActionTextFromProgress(true, 0, 10)).toEqual("Добавить курс")
    })
    it("with adding mark #2", () => {
      expect(M.getActionTextFromProgress(true, 10, 10)).toEqual("Добавить курс")
    })
    it("with adding mark #3", () => {
      expect(M.getActionTextFromProgress(true, 1, 10)).toEqual("Добавить курс")
    })
    it("without adding mark #1", () => {
      expect(M.getActionTextFromProgress(false, 0, 10)).toEqual("Начать тренировки")
    })
    it("without adding mark #2", () => {
      expect(M.getActionTextFromProgress(false, 10, 10)).toEqual("Начать заново")
    })
    it("without adding mark #3", () => {
      expect(M.getActionTextFromProgress(false, 1, 10)).toEqual("Продолжить")
    })
  })

  describe("do fillUserFieldsInCourse() correctly", () => {
    it("with exercises #1", () => {
      D.init()

      M.fillUserFieldsInCourse(D.courseData, D.workoutsData, D.userData)
      expect(D.courseData.progress).toEqual(1)
      expect(D.courseData.max).toEqual(2)
    })

    it("with exercises #2", () => {
      D.init()
      D.prepareTest2()

      M.fillUserFieldsInCourse(D.courseData, D.workoutsData, D.userData)
      expect(D.courseData.progress).toEqual(2)
      expect(D.courseData.max).toEqual(2)
    })

    it("with exercises #3", () => {
      D.init()
      D.prepareTest3()

      M.fillUserFieldsInCourse(D.courseData, D.workoutsData, D.userData)
      expect(D.courseData.progress).toEqual(0)
      expect(D.courseData.max).toEqual(2)
    })

    it("without exercises #1", () => {
      D.init()

      M.fillUserFieldsInCourse(D.courseData, D.workoutsData2, D.userData2)
      expect(D.courseData.progress).toEqual(1)
      expect(D.courseData.max).toEqual(2)
    })

    it("without exercises #2", () => {
      D.init()
      D.prepareTest5()

      M.fillUserFieldsInCourse(D.courseData, D.workoutsData2, D.userData2)
      expect(D.courseData.progress).toEqual(2)
      expect(D.courseData.max).toEqual(2)
    })

    it("without exercises #3", () => {
      D.init()
      D.prepareTest6()

      M.fillUserFieldsInCourse(D.courseData, D.workoutsData2, D.userData2)
      expect(D.courseData.progress).toEqual(0)
      expect(D.courseData.max).toEqual(2)
    })
  })

  describe("do getProgressInsideUserData() correctly", () => {
    it("with exercises #1", () => {
      D.init()

      const result = M.getProgressInsideUserData(D.userData, "course_0", "workout_1")
      expect(result).toEqual(25)
    })

    it("with exercises #2", () => {
      D.init()
      D.prepareTest2()

      const result = M.getProgressInsideUserData(D.userData, "course_0", "workout_1")
      expect(result).toEqual(30)
    })

    it("with exercises #3", () => {
      D.init()

      const result = M.getProgressInsideUserData(D.userData, "course_0", "workout_2")
      expect(result).toEqual(30)
    })

    it("without exercises #1", () => {
      D.init()

      const result = M.getProgressInsideUserData(D.userData2, "course_0", "workout_1")
      expect(result).toEqual(1)
    })

    it("without exercises #2", () => {
      D.init()

      const result = M.getProgressInsideUserData(D.userData2, "course_0", "workout_2")
      expect(result).toEqual(0)
    })

    it("without exercises #3", () => {
      D.init()
      D.prepareTest6()

      const result = M.getProgressInsideUserData(D.userData2, "course_0", "workout_1")
      expect(result).toEqual(0)
    })
  })
})
