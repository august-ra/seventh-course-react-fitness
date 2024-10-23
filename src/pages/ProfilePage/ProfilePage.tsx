import { sharedStyles } from "../../sharedStyles"
import { twMerge } from "tailwind-merge"

import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import { Outlet } from "react-router-dom"
import { useUserContext } from "../../context/UserContext/UserContext"


export default function ProfilePage() {
  const userContext = useUserContext()

  return (
    <div className={sharedStyles.wrapper}>
      <div className={sharedStyles.container}>
        <Header />

        <main className="">
          <section className="">
            <h2 className={sharedStyles.captionText}>Профиль</h2>

            <div className={sharedStyles.userProfile}>
              <img className={sharedStyles.userProfileLogo} src="/img/person-huge.svg" alt="person" />
              <form className={sharedStyles.userProfileRight}>
                <p className={sharedStyles.userProfileName}>{userContext.email}</p>
                <p className={sharedStyles.userProfileEmail}>E-mail: {userContext.email}</p>
                <div className={sharedStyles.userProfileButtons}>
                  <Button primary={true} type="submit" additionalClasses={sharedStyles.userProfileButton}>
                    Изменить пароль
                  </Button>
                  <Button primary={false} additionalClasses={sharedStyles.userProfileButton}>Выйти</Button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>

      <Footer />

      <Outlet />
    </div>
  )
}
