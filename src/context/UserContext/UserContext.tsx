import { createContext, ReactNode, useContext, useState } from "react"
import { User } from "firebase/auth"


type OptionalUserType = UserType | Record<string, never>

/* interfaces */

interface UserType {
  uid:    string
  email:  string | null
  tokens: {
    access:  string
    refresh: string
  }
}

export interface UserContextValue extends UserType {
  isAuthenticated: () => boolean
  save:            (userInfo: UserType) => void
  clear:           () => void
}

interface Props {
  children: ReactNode
}

export interface ExtendedUser extends User {
  stsTokenManager: {
    accessToken:  string
    refreshToken: string
  }
}

/* context */

const UserContext = createContext<UserContextValue | undefined>(undefined)

/* static methods */

export function getEmptyUser(): UserType {
  return {
    uid: "",
    email: "",
    tokens: {
      access: "",
      refresh: "",
    },
  }
}

export function normalizeUser(data: ExtendedUser): UserType {
  return {
    uid:    data.uid,
    email:  data.email,
    tokens: {
      access:  data.stsTokenManager.accessToken,
      refresh: data.stsTokenManager.refreshToken,
    },
  } as UserType
}

function read() {
  const data:     string | null    = localStorage.getItem("userInfo")
  let   userInfo: OptionalUserType = {}

  if (data)
    userInfo = JSON.parse(data)

  if (!userInfo || typeof userInfo !== "object")
    return {}

  return userInfo
}

/* provider */

export function UserProvider({ children }: Props) {
  const [data, setData] = useState<OptionalUserType>(read())

  function isAuthenticated() {
    return Boolean(data && ("email" in data && data.email))
  }

  function save(userInfo: UserType) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo))

    setData(userInfo)
  }

  function clear() {
    localStorage.removeItem("userInfo")

    setData({})
  }

  return (
    <UserContext.Provider value={{ ...getEmptyUser(), isAuthenticated, save, clear, ...data }}>{children}</UserContext.Provider>
  )
}

/* hooks */

export function useUserContext() {
  const context = useContext(UserContext)

  if (!context)
    throw new Error("useCurrentTrack must be used within UserProvider")

  return context
}
