import Button from "./Button.tsx"
import Tablet from "./Tablet.tsx"


export default function Main() {
  return (
    <div className="wrapper flex flex-col justify-between h-[100vh]">
      <div className="m-auto w-[1260px] flex-1">
        <header className="flex justify-between w-full pt-[50px] pb-[60px]">
          <div className=" flex flex-col justify-start w-1/2 text-left">
            <img className="w-[220px] h-[35px] text-left" src="/img/logo.svg" alt="logo" />
            <p className="text-[18px]">Онлайн-тренировки для занятий дома</p>
          </div>

          <Button primary={true}>Войти</Button>
        </header>
  
        <main className="main-content">
          <section className="content">
            <div className="flex justify-between text-left">
              <h1 className="text-[60px] max-w-[868px] font-medium leading-none">Начните заниматься спортом и улучшите
                качество жизни</h1>
  
              <div className="relative">
                <img className="h-[36px] w-[30px] absolute right-[140px] top-[85px]" src="/img/tail.svg" alt="tail" />
                <p
                  className="text-[32px] bg-good w-[288px] h-[102px] rounded-[5px] px-[20px] py-[16px] leading-9 relative z-20">Измени
                  своё тело за полгода!</p>
              </div>
            </div>
  
            <div className="flex flex-wrap w-full justify-between gap-10 mt-[50px]">
              <div className="bg-white w-[360px] h-[501px] rounded-[30px] shadow-3xl">
                <div className="w-[360px] h-[325px] relative overflow-hidden rounded-[30px]">
                  <img
                    className="absolute min-w-[834px] min-h-[557px] left-[-242px] top-[-119px] right-[232px] bottom-[113px]"
                    src="/img/yoga.jpeg" alt="yoga" />
                  <img className="absolute w-[32px] h-[32px] top-[20px] right-[20px]" src="/img/plus.svg" alt="add" />
                </div>
  
                <div className="pt-6 px-[30px]">
                  <div className="flex flex-col gap-5">
                    <p className="text-[32px] font-medium leading-9">Йога</p>
  
                    <div className="flex flex-wrap gap-[6px]">
                      <Tablet imgName="calendar">25 дней</Tablet>
                      <Tablet imgName="time">20-50 мин/день</Tablet>
                      <Tablet imgName="difficulty" difficulty={1} />
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="bg-white w-[360px] h-[649px] rounded-[30px] shadow-3xl">
                <div className="w-[360px] h-[325px] relative overflow-hidden rounded-[30px]">
                  <img
                    className="absolute min-w-[834px] min-h-[557px] left-[-242px] top-[-119px] right-[232px] bottom-[113px]"
                    src="/img/yoga.jpeg" alt="yoga" />
                  <img className="absolute w-[32px] h-[32px] top-[20px] right-[20px]" src="/img/plus.svg" alt="add" />
                </div>
  
                <div className="pt-6 px-[30px]">
                  <div className="flex flex-col gap-5">
                    <p className="text-[32px] font-medium leading-9">Йога</p>
  
                    <div className="flex flex-wrap gap-[6px]">
                      <Tablet imgName="calendar">25 дней</Tablet>
                      <Tablet imgName="time">20-50 мин/день</Tablet>
                      <Tablet imgName="difficulty" difficulty={3} />
                    </div>
  
                    <div className="flex flex-col gap-[10px]">
                      <p className="text-[18px] leading-[20px]">Прогресс 40%</p>
                      <div className="relative">
                        <div className="absolute bg-light-bg rounded-[50px] w-full h-[6px]" />
                        <div className="absolute bg-work rounded-[50px] w-[120px] h-[6px]" />
                      </div>
                    </div>
                  </div>

                  <Button additionalClasses="w-full mt-10" primary={true}>Продолжить</Button>
                </div>
              </div>
  
              <div className="bg-white w-[360px] h-[501px] rounded-[30px] shadow-3xl">
                <div className="w-[360px] h-[325px] relative overflow-hidden rounded-[30px]">
                  <img
                    className="absolute min-w-[834px] min-h-[557px] left-[-242px] top-[-119px] right-[232px] bottom-[113px]"
                    src="/img/yoga.jpeg" alt="yoga" />
                  <img className="absolute w-[32px] h-[32px] top-[20px] right-[20px]" src="/img/plus.svg" alt="add" />
                </div>
  
                <div className="pt-6 px-[30px]">
                  <div className="flex flex-col gap-5">
                    <p className="text-[32px] font-medium leading-9">Йога</p>
  
                    <div className="flex flex-wrap gap-[6px]">
                      <Tablet imgName="calendar">25 дней</Tablet>
                      <Tablet imgName="time">20-50 мин/день</Tablet>
                      <Tablet imgName="difficulty" difficulty={5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="flex justify-center pt-[50px] pb-[60px] flex-none text-[18px]">
        Все тренировки разрешены и © права защищены, 2024 г.
      </footer>
    </div>
  )
}
