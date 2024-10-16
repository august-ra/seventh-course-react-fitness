// @ts-nocheck
// there is special file to get sharedStyles.ts
// you can use `npm run prebuild` + `npm run dev`

import { sharedStyles } from "./sharedStyles"

function StyleClasses() {
  return (
    <>
      {/* common */}
      <shadowedBlock className="shadow-3xl duration-300 hover:scale-102" />
      {/* courses */}
      <colors className="bg-aerobics bg-body-flex bg-stretching bg-yoga bg-zumba" />
      {/* button */}
      <buttonCommon className="h-13 w-[103px] rounded-[46px] text-[18px] duration-300" />
      <buttonPrimary className="bg-good hover:bg-well active:bg-black active:text-white disabled:bg-light-bg disabled:text-light-tx" />
      <buttonSecondary className="border border-black bg-white hover:bg-light-bg active:bg-dark disabled:text-light-tx" />
      <buttonWide className="w-full" />
      <buttonWideWithMargin className="mt-10 w-full" />
      {/* main */}
      <wrapper className="flex h-[100vh] flex-col justify-between" />
      <container className="m-auto w-[1160px] flex-1" />
      {/* header */}
      <header className="flex w-full justify-between pb-[60px] pt-[50px]" />
      <headerContainer className="flex w-1/2 flex-col justify-start text-left" />
      <headerLogo className="h-[35px] w-[220px]" />
      <headerSlogan className="text-[18px]" />
      {/* caption */}
      <caption className="flex justify-between text-left" />
      <captionText className="max-w-[864px] text-[60px] font-medium leading-none" />
      <captionBalloon className="relative" />
      <captionBalloonTail className="absolute right-[140px] top-[85px] h-[36px] w-[30px]" />
      <captionBalloonFace className="relative z-10 h-[102px] w-[288px] rounded-[5px] bg-good px-[20px] py-[16px] text-[32px] leading-9" />
      {/* banner */}
      <banner className="relative mb-[60px] h-[310px] max-h-[310px] min-h-[310px] w-[1160px] overflow-hidden rounded-[30px] p-10 text-white" />
      <bannerText className="relative z-10 h-[66px] text-[60px] font-medium leading-[66px]" />
      <bannerPicture className="absolute" />
      <banner-yoga className="right-[-295px] top-[-175px] w-[80%]" />
      <banner-stretching className="right-[-10px] top-0 w-[30%]" />
      <banner-zumba className="right-[-271px] top-[-37px] w-[78%]" />
      <banner-aerobics className="right-0 top-[-315px] w-[40%]" />
      <banner-body-flex className="right-[-200px] top-[-155px] w-[70%]" />
      {/* card */}
      <cards className="mt-[50px] flex w-full flex-wrap justify-start gap-10" />
      <card className="relative h-[501px] w-[360px] rounded-[30px] bg-white hover:z-50" />
      <cardFull className="h-[649px]" />
      <cardPicture className="relative h-[325px] w-[360px] overflow-hidden rounded-[30px]" />
      <cardInner className="absolute" />
      <card-yoga className="right-[-232px] top-[-119px] min-h-[557px] min-w-[834px]" />
      <card-stretching className="right-0 top-0 min-h-[540px] min-w-[360px]" />
      <card-zumba className="right-[-398px] top-[-32px] min-h-[767px] min-w-[1150px]" />
      <card-aerobics className="right-[-82px] top-[-715px] min-h-[1081px] min-w-[721px]" />
      <card-body-flex className="right-[-182px] top-[-168px] min-h-[514px] min-w-[771px]" />
      <cardAction className="group/card absolute h-[32px] w-[32px]" />
      <cardAddBtn className="absolute left-[308px] top-[-305px] h-[32px] w-[32px] cursor-arrow duration-300 hover:scale-110" />
      <cardActionTooltip className="absolute left-[352px] top-[-262px] hidden h-[27px] w-max items-center justify-center rounded-[5px] border border-black bg-white p-1.5 text-sm group-hover/card:flex" />
      <cardBlock className="px-[30px] pt-6" />
      <cardContent className="flex flex-col gap-5" />
      <cardTitle className="text-[32px] font-medium leading-9" />
      <cardTablets className="flex flex-wrap gap-[6px]" />
      <cardTablet className="flex h-[38px] gap-[6px] rounded-[50px] bg-light-bg p-[10px]" />
      <cardTabletText className="text-nowrap text-[16px] leading-[18px]" />
      <cardProgress className="flex flex-col gap-[10px]" />
      <cardProgressText className="text-[18px] leading-[20px]" />
      {/* presentation */}
      <presentation className="my-[60px]" />
      <presentationTitle className="mb-10 text-[40px] font-medium leading-[44px]" />
      <presentationContent className="flex justify-between gap-[17px] text-left" />
      <presentationBlock className="flex h-[141px] items-center gap-[25px] rounded-[28px] bg-black px-5" />
      <presentationNumber className="text-[75px] font-medium leading-[102px] text-good" />
      <presentationText className="text-[24px] leading-[30px] text-white" />
      <presentationGoals className="flex flex-wrap gap-x-[124px] gap-y-[34px] rounded-[28px] bg-good p-[30px] text-[24px] leading-[26px]" />
      <presentationGoal className="flex h-13/2 w-[284px] items-center gap-2" />
      <presentationGoalStar className="h-13/2 w-[26px]" />
      <presentationNewLife className="relative mb-[50px] mt-[100px] rounded-[30px] bg-white p-10" />
      <presentationNewLifeTitle className="mb-10 text-[60px] font-medium leading-[60px]" />
      <presentationNewLifeLeft className="w-[448px] list-inside" />
      <presentationNewLifeLeftItem className="list-disc text-2xl opacity-60" />
      <presentationNewLifeRight555 className="absolute bottom-[-113px] right-[-16px] h-[690px] w-[739px]" />
      <presentationNewLifeRight className="absolute bottom-0 right-0 h-full w-full overflow-hidden" />
      <presentationNewLifeLines className="absolute bottom-[-58px] right-[30px] h-[530px] w-[635px]" />
      <presentationNewLifeMan className="absolute bottom-[9px] right-[9px] h-[570px] w-[550px]" />
      {/* progress bar */}
      <progressBar className="relative" />
      <progressBarBack className="absolute h-[6px] w-full rounded-[50px] bg-light-bg" />
      <progressBarFront className="absolute h-[6px] w-[120px] rounded-[50px] bg-work" />
      {/* footer */}
      <climber className="mt-[34px] flex justify-center" />
      <footer className="flex flex-none justify-center pb-[60px] pt-[50px] text-[18px]" />
      {/* signing */}
      <modalWrapper className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-blocked" />
      <modalForm className="m-auto flex w-[360px] flex-col items-center gap-12 rounded-[30px] bg-white p-10" />
      <modalFormInner className="flex w-full flex-col items-center gap-[34px]" />
      <modalFormSubgroup className="flex w-full flex-col items-center gap-[10px]" />
      <modalFormInput className="h-13 w-full rounded-[8px] border border-neutral bg-white px-4.5 py-4" />
      <modalFormError className="text-center text-sm text-bad" />
      <modalFormErrorLink className="text-center text-sm font-medium text-bad underline" />
      {/* page 404 */}
      <page404Container className="relative flex h-screen justify-center bg-white" />
      <page404Image className="h-[800px] w-[1200px]" />
      <page404TextBlock className="absolute top-[400px] flex w-[700px] flex-col gap-4" />
      <page404Title className="text-[28px] text-[#175AB2]" />
      <page404Description className="w-[360px] leading-6" />
    </>
  )
}
