import SigningModal from "../pages/SigningModal/SigningModal"

import "@testing-library/jest-dom"
import { renderWithProviders } from "../utils/tests"


jest.mock("../api/usersApi", () => ({
  create: jest.fn((email: string, password: string, name: string) => (
    console.log(email, "; ", password, "; ", name)
  )),
}))

describe("ProgressBar Component", () => {
  it("renders correctly in signing-in mode", () => {
    const { container } = renderWithProviders(<SigningModal mode="signIn" />)
    const inputs = container.querySelectorAll("input")
    expect(inputs.length).toEqual(2)

    const buttons = container.querySelectorAll("button")
    expect(buttons.length).toEqual(2)
    expect(buttons[0]).toHaveTextContent("Войти")
    expect(buttons[1]).toHaveTextContent("Зарегистрироваться")
  })
  it("renders correctly in signing-up mode", () => {
    const { container } = renderWithProviders(<SigningModal mode="signUp" />)

    const inputs = container.querySelectorAll("input")
    expect(inputs.length).toEqual(3)

    const buttons = container.querySelectorAll("button")
    expect(buttons.length).toEqual(2)
    expect(buttons[0]).toHaveTextContent("Зарегистрироваться")
    expect(buttons[1]).toHaveTextContent("Войти")
  })
})
