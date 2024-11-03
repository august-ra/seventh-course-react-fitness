import { PropsWithChildren, ReactElement } from "react"
import { render } from "@testing-library/react"
import type { RenderOptions } from "@testing-library/react"
import { UserProvider } from "../context/UserContext/UserContext"
import { MemoryRouter } from "react-router-dom"


export function renderWithProviders(ui: ReactElement, options: RenderOptions = {}) {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <UserProvider>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </UserProvider>
  )

  return render(ui, { wrapper: Wrapper, ...options })
}
