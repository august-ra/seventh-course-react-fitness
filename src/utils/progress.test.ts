import * as M from "./progress"


describe("Test progress.ts", () => {
  describe("getRate() correctly", () => {
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

  describe("getActionTextFromProgress() correctly", () => {
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
})
