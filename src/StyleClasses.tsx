// @ts-nocheck
// there is special file to get sharedStyles.ts
// you can use `npm run prebuild` + `npm run dev`

import { sharedStyles } from "./sharedStyles"

function StyleClasses() {
  return (
    <>
      {/* common */}
      <shadowedBlock className="shadow-3xl" />
      <scaledBlock className="duration-300 hover:scale-102" />
      <text_18_20 className="text-[18px] leading-[20px]" />
      {/* courses */}
      <colors className="bg-aerobics bg-body-flex bg-stretching bg-yoga bg-zumba" />
      {/* button */}
      <buttonCommon className="h-13 w-[103px] rounded-[46px] duration-300" />
      <buttonPrimary className="bg-good hover:bg-well active:bg-black active:text-white disabled:bg-light-bg disabled:text-light-tx" />
      <buttonSecondary className="border border-black bg-white hover:bg-light-bg active:bg-dark disabled:text-light-tx" />
      <buttonWide className="w-full" />
      <buttonWideWithFields className="w-full text-nowrap px-11" />
      <buttonWideWithMargin className="mt-10 w-full" />
      {/* main */}
      <wrapper className="flex h-[100vh] flex-col justify-between" />
      <container className="m-auto w-[1160px] flex-1" />
      {/* header */}
      <header className="flex w-full justify-between pb-[60px] pt-[50px]" />
      <headerContainer className="flex w-1/2 flex-col justify-start gap-[15px] text-left" />
      <headerLogo className="h-[35px] w-[220px]" />
      <headerSlogan className="" />
      <headerUserGroup className="relative flex h-[50px] items-center gap-4" />
      <headerProfileBlock className="group/profile flex items-center gap-3" />
      <headerProfileLogo className="h-[50px] w-[50px]" />
      <headerProfileName className="text-[24px] leading-[26px] hover:underline group-hover/profile:text-404" />
      <headerProfileNameBtn className="mr-px h-2 w-2 rotate-45 border-b-2 border-r-2 group-hover/profile:border-404" />
      <headerProfileNameBtnReversed className="rotate-225" />
      {/* caption */}
      <caption className="flex justify-between text-left" />
      <captionText className="max-w-[864px] text-[60px] font-medium leading-none" />
      <captionBalloon className="relative" />
      <captionBalloonTail className="absolute right-[140px] top-[85px] h-[36px] w-[30px]" />
      <captionBalloonFace className="relative z-10 h-[102px] w-[288px] rounded-[5px] bg-good px-5 py-4 text-[32px] leading-9" />
      {/* banner */}
      <banner className="relative mb-[60px] h-[310px] max-h-[310px] min-h-[310px] w-[1160px] overflow-hidden rounded-[30px] p-10 text-white" />
      <bannerText className="relative z-10 mb-[18px] h-[66px] text-[60px] font-medium leading-[66px]" />
      <bannerPicture className="absolute" />
      <banner-yoga className="right-[-295px] top-[-175px] w-[80%]" />
      <banner-stretching className="right-[-10px] top-0 w-[30%]" />
      <banner-zumba className="right-[-271px] top-[-37px] w-[78%]" />
      <banner-aerobics className="right-0 top-[-315px] w-[40%]" />
      <banner-body-flex className="right-[-200px] top-[-155px] w-[70%]" />
      {/* card */}
      <cards className="mt-[50px] flex w-full flex-wrap justify-start gap-10" />
      <card className="relative w-[360px] rounded-[30px] bg-white hover:z-50" />
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
      <cardBlock className="px-[30px] pb-[15px] pt-6" />
      <cardContent className="flex flex-col gap-5" />
      <cardTitle className="text-[32px] font-medium leading-9" />
      <cardTablets className="flex flex-wrap gap-[6px]" />
      <cardTablet className="flex h-[38px] gap-[6px] rounded-[50px] bg-light-bg p-[10px]" />
      <cardTabletText className="text-nowrap text-[16px] leading-[18px]" />
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
      <presentationNewLifeLeft className="relative z-10 w-[448px] list-inside" />
      <presentationNewLifeLeftItem className="list-disc text-2xl opacity-60" />
      <presentationNewLifeRight555 className="absolute bottom-[-113px] right-[-16px] h-[690px] w-[739px]" />
      <presentationNewLifeRight className="absolute bottom-0 right-0 h-full w-full overflow-hidden" />
      <presentationNewLifeLines className="absolute bottom-[-58px] right-[30px] h-[530px] w-[635px]" />
      <presentationNewLifeMan className="absolute bottom-[9px] right-[9px] h-[570px] w-[550px]" />
      {/* user menu */}
      <userMenu className="absolute right-0 top-[74px] z-20 flex flex-col justify-center gap-[34px] rounded-[30px] bg-white p-[30px]" />
      <userMenuEmail className="text-center text-lg" />
      <userMenuButtons className="flex w-full flex-col gap-2.5" />
      {/* user profile */}
      <userProfile className="mt-10 flex gap-[33px] rounded-[30px] bg-white p-[30px]" />
      <userProfileSection className="mt-[60px]" />
      <userProfileLogo className="h-[197px] w-[197px] rounded-[20px]" />
      <userProfileRight className="flex flex-col gap-[30px]" />
      <userProfileName className="text-[32px] leading-[36px]" />
      <userProfileEmail className="text-lg [&>span]:font-medium" />
      <userProfileButtons className="flex w-full gap-2.5" />
      <userProfileButton className="w-[192px]" />
      {/* workout */}
      <breadcrumbsLine className="mb-10 text-[32px] leading-[36px]" />
      <breadcrumb className="underline hover:text-404" />
      <breadcrumbLast className="underline" />
      <videoBlock className="h-[639px] overflow-hidden rounded-[30px]" />
      <workoutProgresses className="grid w-full grid-cols-3 gap-x-[60px] gap-y-5" />
      <workoutDayCaption className="mb-5 text-[32px] leading-[36px]" />
      <buttonProgress className="mt-10 w-[320px]" />
      <writeProgressScrollingList className="max-h-[346px] w-[346px] overflow-y-scroll" />
      <writeProgressScrollingListGapped className="pr-[26px]" />
      <writeProgressList className="flex w-full flex-col gap-5 overflow-y-scroll" />
      <writeProgressItem className="flex flex-col gap-[10px]" />
      <writeProgressInput className="h-[52px] rounded-[8px] border border-neutral bg-white px-[18px] py-4" />
      {/* progress */}
      <progress className="flex flex-col gap-[10px]" />
      <progressText className="" />
      <progressBar className="relative" />
      <progressBarBack className="absolute h-[6px] w-full rounded-[50px] bg-light-bg" />
      <progressBarFront className="absolute h-[6px] w-[120px] rounded-[50px] bg-work" />
      {/* footer */}
      <climber className="mt-[34px] flex justify-center" />
      <footer className="flex flex-none justify-center pb-[60px] pt-[50px]" />
      {/* modal: signing */}
      <modalWrapper className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-blocked" />
      <modalForm className="m-auto flex w-[360px] flex-col items-center gap-12 rounded-[30px] bg-white p-10" />
      <modalFormCaption className="mb-[14px] text-[32px] leading-9" />
      <modalFormInner className="flex w-full flex-col items-center gap-[34px]" />
      <modalFormSubgroup className="flex w-full flex-col items-center gap-[10px]" />
      <modalFormInput className="h-13 w-full rounded-[8px] border border-neutral bg-white px-4.5 py-4" />
      <modalFormError className="text-center text-sm text-bad" />
      <modalFormSuggestionLink className="text-center text-sm font-medium text-404 underline" />
      <modalFormErrorLink className="text-center text-sm font-medium text-bad underline" />
      {/* modal: exercises' list */}
      <modalFormCompact className="w-auto gap-[34px]" />
      <modalScrollingList className="max-h-[364px] w-full overflow-y-scroll" />
      <modalScrollingListGapped className="pr-[26px]" />
      <modalList className="w-full" />
      <modalListItem className="flex items-center gap-[10px] border-b border-b-delimiter pb-2.5 [&:not(:first-child)]:pt-2.5" />
      <modalListMark className="h-6 w-6" />
      <modalListEmptyMark className="m-0.5 h-[20px] w-[20px] rounded-[10px] border-2 border-light-tx" />
      <modalListItemContent className="flex flex-col gap-[10px]" />
      <modalListItemExercise className="text-[24px] leading-[26px]" />
      <modalListItemCourse className="text-[16px] leading-[18px]" />
      {/* page 404 */}
      <page404Container className="relative flex h-screen justify-center bg-white" />
      <page404Image className="h-[800px] w-[1200px]" />
      <page404TextBlock className="absolute top-[400px] flex w-[700px] flex-col gap-4" />
      <page404Title className="text-[28px] text-404" />
      <page404Description className="w-[360px] leading-6" />
    </>
  )
}
