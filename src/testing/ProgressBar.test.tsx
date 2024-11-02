import ProgressBar from "../components/Progress/ProgressBar"

import "@testing-library/jest-dom"
import { render } from "@testing-library/react"


describe("ProgressBar Component", () => {
  it("renders correctly #0", () => {
    const { container } = render(<ProgressBar progress={100} />)

    const elements = container.querySelectorAll("div")
    expect(elements.length).toEqual(3)
    expect(elements[0]).toHaveClass("progressBar")
    expect(elements[1]).toHaveClass("progressBarBack")
    expect(elements[2]).toHaveClass("progressBarFront")
  })
  it("renders correctly #1", () => {
    const { container } = render(<ProgressBar progress={100} />)

    const elements = container.querySelectorAll("div")
    expect(elements.length).toEqual(3)
    expect(elements[2]).toHaveStyle({ width: "100%" })
  })
  it("renders correctly #2", () => {
    const { container } = render(<ProgressBar progress={150} />)

    const elements = container.querySelectorAll("div")
    expect(elements.length).toEqual(3)
    expect(elements[2]).toHaveStyle({ width: "100%" })
  })
  it("renders correctly #3", () => {
    const { container } = render(<ProgressBar progress={60} />)

    const elements = container.querySelectorAll("div")
    expect(elements.length).toEqual(3)
    expect(elements[2]).toHaveStyle({ width: "60%" })
  })
  it("renders correctly #4", () => {
    const { container } = render(<ProgressBar progress={0} />)

    const elements = container.querySelectorAll("div")
    expect(elements.length).toEqual(3)
    expect(elements[2]).toHaveStyle({ width: "1%" })
  })
  it("renders correctly #4", () => {
    const { container } = render(<ProgressBar progress={-50} />)

    const elements = container.querySelectorAll("div")
    expect(elements.length).toEqual(3)
    expect(elements[2]).toHaveStyle({ width: "1%" })
  })
})
