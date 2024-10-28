import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { UserProvider } from "./context/UserContext/UserContext"

import App from "./App"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
