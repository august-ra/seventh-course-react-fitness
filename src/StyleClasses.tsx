// @ts-nocheck
// there is system file to build sharedStyles.ts
// you can use `npm run prebuild` + `npm run dev`

import { sharedStyles } from "./sharedStyles.ts"

function StyleClasses() {
  return (
    <>
      {/* common */}
      <shadowedBlock className="shadow-3xl hover:scale-105" />
      {/* button */}
      <buttonCommon className="h-[52px] w-[103px] rounded-[46px] text-[18px]" />
      <buttonPrimary className="bg-good hover:bg-well active:bg-black active:text-white disabled:bg-light-bg disabled:text-light-tx" />
      <buttonSecondary className="border border-black bg-white hover:bg-light-bg active:bg-dark disabled:text-light-tx" />
      {/* main */}
      <wrapper className="flex h-[100vh] flex-col justify-between" />
      <container className="m-auto w-[1260px] flex-1" />
      {/* header */}
      <header className="flex w-full justify-between pb-[60px] pt-[50px]" />
      <headerContainer className="flex w-1/2 flex-col justify-start text-left" />
      <headerLogo className="h-[35px] w-[220px]" />
      <headerSlogan className="text-[18px]" />
      {/* caption */}
      <caption className="flex justify-between text-left" />
      <captionText className="max-w-[868px] text-[60px] font-medium leading-none" />
      <captionBalloon className="relative" />
      <captionBalloonTail className="absolute right-[140px] top-[85px] h-[36px] w-[30px]" />
      <captionBalloonFace className="relative z-20 h-[102px] w-[288px] rounded-[5px] bg-good px-[20px] py-[16px] text-[32px] leading-9" />
      {/* card */}
      <cards className="mt-[50px] flex w-full flex-wrap justify-between gap-10" />
      <card className="h-[501px] w-[360px] rounded-[30px] bg-white" />
      <cardFull className="h-[649px]" />
      <cardPicture className="relative h-[325px] w-[360px] overflow-hidden rounded-[30px]" />
      <cardInner className="absolute bottom-[113px] left-[-242px] right-[232px] top-[-119px] min-h-[557px] min-w-[834px]" />
      <cardAddBtn className="absolute right-[20px] top-[20px] h-[32px] w-[32px]" />
      <cardBlock className="px-[30px] pt-6" />
      <cardContent className="flex flex-col gap-5" />
      <cardTitle className="text-[32px] font-medium leading-9" />
      <cardTablets className="flex flex-wrap gap-[6px]" />
      <cardTablet className="flex h-[38px] gap-[6px] rounded-[50px] bg-light-bg p-[10px]" />
      <cardTabletText className="text-nowrap text-[16px] leading-[18px]" />
      <cardProgress className="flex flex-col gap-[10px]" />
      <cardProgressText className="text-[18px] leading-[20px]" />
      {/* progress */}
      <progress className="relative" />
      <progressBack className="absolute h-[6px] w-full rounded-[50px] bg-light-bg" />
      <progressFront className="absolute h-[6px] w-[120px] rounded-[50px] bg-work" />
      {/* footer */}
      <climber className="mt-[34px] flex justify-center" />
      <footer className="flex flex-none justify-center pb-[60px] pt-[50px] text-[18px]" />
      {/* progress */}
      <progress classNam="relative" />
      <progress classNam="relative" />
      <progress classNam="relative" />
      <progress classNam="relative" />
    </>
  )
}
