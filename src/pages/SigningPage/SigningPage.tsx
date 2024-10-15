import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../../components/Button/Button"
import MainPage from "../MainPage/MainPage"

import { useState } from "react"


interface Props {
  mode: "signIn" | "signUp" | "signOut" | "resetStart" | "resetEnd"
}

interface ExtendedProps extends Props {
  formData: {
    email:    string
    login:    string
    password: string
    repeat:   string
  }
  setFormData: (value: ExtendedProps["formData"]) => void
  error: {
    showing: boolean
    message: string
    reset:   boolean
  }
  setError: (value: ExtendedProps["error"]) => void
}

export default function SigningPage({ mode }: Props) {
  const [error, setError] = useState<ExtendedProps["error"]>({
    showing: true,
    message: "",
    reset:   false,
  })

  const [formData, setFormData] = useState<ExtendedProps["formData"]>({
    email:    "",
    login:    "",
    password: "",
    repeat:   "",
  })

  return (
    <>
      <MainPage />

      <div className={sharedStyles.modalWrapper}>
        <form className={sharedStyles.modalForm}>
          <img className={sharedStyles.headerLogo} src="/img/logo.svg" alt="logo" />

          {
            mode === "resetStart"
              ? (
                <p>Ссылка для восстановления пароля отправлена на {formData.email}</p>
              )
              : (
                <ModalContent mode={mode} formData={formData} setFormData={setFormData} error={error} setError={setError} />
              )
          }
        </form>
      </div>
    </>
  )
}

function ModalContent({ mode, formData, setFormData, error, setError }: ExtendedProps) {
  return (
    <div className={sharedStyles.modalFormInner}>
      <div className={sharedStyles.modalFormSubgroup}>
        {
          (mode === "signIn" || mode === "signUp")
            && (
              <input className={sharedStyles.modalFormInput} type="text" placeholder="Логин" />
            )
        }
        <input className={sharedStyles.modalFormInput} type="password" placeholder="Пароль" />
        {
          (mode === "signUp" || mode === "resetEnd")
            && (
              <input className={sharedStyles.modalFormInput} type="password" placeholder="Повтор пароля" />
            )
        }
      </div>

      {
        error.showing
          && (
            <p className={sharedStyles.modalFormError}>
              Пароль введен неверно, попробуйте<br />еще раз.&nbsp;
              <a className={sharedStyles.modalFormErrorLink} href="#">Восстановить пароль?</a>
            </p>
          )
      }

      <div className={sharedStyles.modalFormSubgroup}>
        {
          mode === "signIn"
            ? (
              <>
                <Button primary={true} additionalClasses={sharedStyles.buttonWide}>Войти</Button>
                <Button primary={false} additionalClasses={sharedStyles.buttonWide}>Зарегистрироваться</Button>
              </>
            )
          : mode === "signUp"
            ? (
              <>
                <Button primary={true} additionalClasses={sharedStyles.buttonWide}>Зарегистрироваться</Button>
                <Button primary={false} additionalClasses={sharedStyles.buttonWide}>Войти</Button>
              </>
            )
            : (
              <Button primary={true} additionalClasses={sharedStyles.buttonWide}>Подтвердить</Button>
            )
        }
      </div>
    </div>
  )
}
