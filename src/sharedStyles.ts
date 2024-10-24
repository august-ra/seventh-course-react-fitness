
export const sharedStyles = {

  /* common */

  shadowedBlock: "shadowedBlock shadow-3xl duration-300 hover:scale-102",

  /* courses */

  colors: "colors bg-aerobics bg-body-flex bg-stretching bg-yoga bg-zumba",

  /* button */

  buttonCommon: "buttonCommon h-13 w-[103px] rounded-[46px] text-[18px] duration-300",
  buttonPrimary: "buttonPrimary bg-good hover:bg-well active:bg-black active:text-white disabled:bg-light-bg disabled:text-light-tx",
  buttonSecondary: "buttonSecondary border border-black bg-white hover:bg-light-bg active:bg-dark disabled:text-light-tx",
  buttonWide: "buttonWide w-full",
  buttonWideWithMargin: "buttonWideWithMargin mt-10 w-full",

  /* main */

  wrapper: "wrapper flex h-[100vh] flex-col justify-between",
  container: "container m-auto w-[1160px] flex-1",

  /* header */

  header: "header flex w-full justify-between pb-[60px] pt-[50px]",
  headerContainer: "headerContainer flex w-1/2 flex-col justify-start text-left",
  headerLogo: "headerLogo h-[35px] w-[220px]",
  headerSlogan: "headerSlogan text-[18px]",

  /* caption */

  caption: "caption flex justify-between text-left",
  captionText: "captionText max-w-[864px] text-[60px] font-medium leading-none",
  captionBalloon: "captionBalloon relative",
  captionBalloonTail: "captionBalloonTail absolute right-[140px] top-[85px] h-[36px] w-[30px]",
  captionBalloonFace: "captionBalloonFace relative z-10 h-[102px] w-[288px] rounded-[5px] bg-good px-[20px] py-[16px] text-[32px] leading-9",

  /* banner */

  banner: "banner relative mb-[60px] h-[310px] max-h-[310px] min-h-[310px] w-[1160px] overflow-hidden rounded-[30px] p-10 text-white",
  bannerText: "bannerText relative z-10 h-[66px] text-[60px] font-medium leading-[66px]",
  bannerPicture: "bannerPicture absolute",
  "banner-yoga": "banner-yoga right-[-295px] top-[-175px] w-[80%]",
  "banner-stretching": "banner-stretching right-[-10px] top-0 w-[30%]",
  "banner-zumba": "banner-zumba right-[-271px] top-[-37px] w-[78%]",
  "banner-aerobics": "banner-aerobics right-0 top-[-315px] w-[40%]",
  "banner-body-flex": "banner-body-flex right-[-200px] top-[-155px] w-[70%]",

  /* card */

  cards: "cards mt-[50px] flex w-full flex-wrap justify-start gap-10",
  card: "card relative h-[501px] w-[360px] rounded-[30px] bg-white hover:z-50",
  cardFull: "cardFull h-[649px]",
  cardPicture: "cardPicture relative h-[325px] w-[360px] cursor-pointer overflow-hidden rounded-[30px]",
  cardInner: "cardInner absolute",
  "card-yoga": "card-yoga right-[-232px] top-[-119px] min-h-[557px] min-w-[834px]",
  "card-stretching": "card-stretching right-0 top-0 min-h-[540px] min-w-[360px]",
  "card-zumba": "card-zumba right-[-398px] top-[-32px] min-h-[767px] min-w-[1150px]",
  "card-aerobics": "card-aerobics right-[-82px] top-[-715px] min-h-[1081px] min-w-[721px]",
  "card-body-flex": "card-body-flex right-[-182px] top-[-168px] min-h-[514px] min-w-[771px]",
  cardAction: "cardAction group/card absolute h-[32px] w-[32px]",
  cardAddBtn: "cardAddBtn absolute left-[308px] top-[-305px] h-[32px] w-[32px] cursor-arrow duration-300 hover:scale-110",
  cardActionTooltip: "cardActionTooltip absolute left-[352px] top-[-262px] hidden h-[27px] w-max items-center justify-center rounded-[5px] border border-black bg-white p-1.5 text-sm group-hover/card:flex",
  cardBlock: "cardBlock px-[30px] pt-6",
  cardContent: "cardContent flex flex-col gap-5",
  cardTitle: "cardTitle cursor-pointer text-[32px] font-medium leading-9",
  cardTablets: "cardTablets flex flex-wrap gap-[6px]",
  cardTablet: "cardTablet flex h-[38px] gap-[6px] rounded-[50px] bg-light-bg p-[10px]",
  cardTabletText: "cardTabletText text-nowrap text-[16px] leading-[18px]",
  cardProgress: "cardProgress flex flex-col gap-[10px]",
  cardProgressText: "cardProgressText text-[18px] leading-[20px]",

  /* presentation */

  presentation: "presentation my-[60px]",
  presentationTitle: "presentationTitle mb-10 text-[40px] font-medium leading-[44px]",
  presentationContent: "presentationContent flex justify-between gap-[17px] text-left",
  presentationBlock: "presentationBlock flex h-[141px] items-center gap-[25px] rounded-[28px] bg-black px-5",
  presentationNumber: "presentationNumber text-[75px] font-medium leading-[102px] text-good",
  presentationText: "presentationText text-[24px] leading-[30px] text-white",
  presentationGoals: "presentationGoals flex flex-wrap gap-x-[124px] gap-y-[34px] rounded-[28px] bg-good p-[30px] text-[24px] leading-[26px]",
  presentationGoal: "presentationGoal flex h-13/2 w-[284px] items-center gap-2",
  presentationGoalStar: "presentationGoalStar h-13/2 w-[26px]",
  presentationNewLife: "presentationNewLife relative mb-[50px] mt-[100px] rounded-[30px] bg-white p-10",
  presentationNewLifeTitle: "presentationNewLifeTitle mb-10 text-[60px] font-medium leading-[60px]",
  presentationNewLifeLeft: "presentationNewLifeLeft w-[448px] list-inside",
  presentationNewLifeLeftItem: "presentationNewLifeLeftItem list-disc text-2xl opacity-60",
  presentationNewLifeRight555: "presentationNewLifeRight555 absolute bottom-[-113px] right-[-16px] h-[690px] w-[739px]",
  presentationNewLifeRight: "presentationNewLifeRight absolute bottom-0 right-0 h-full w-full overflow-hidden",
  presentationNewLifeLines: "presentationNewLifeLines absolute bottom-[-58px] right-[30px] h-[530px] w-[635px]",
  presentationNewLifeMan: "presentationNewLifeMan absolute bottom-[9px] right-[9px] h-[570px] w-[550px]",

  /* progress bar */

  progressBar: "progressBar relative",
  progressBarBack: "progressBarBack absolute h-[6px] w-full rounded-[50px] bg-light-bg",
  progressBarFront: "progressBarFront absolute h-[6px] w-[120px] rounded-[50px] bg-work",

  /* footer */

  climber: "climber mt-[34px] flex justify-center",
  footer: "footer flex flex-none justify-center pb-[60px] pt-[50px] text-[18px]",

  /* signing */

  modalWrapper: "modalWrapper fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-blocked",
  modalForm: "modalForm m-auto flex w-[360px] flex-col items-center gap-12 rounded-[30px] bg-white p-10",
  modalFormInner: "modalFormInner flex w-full flex-col items-center gap-[34px]",
  modalFormSubgroup: "modalFormSubgroup flex w-full flex-col items-center gap-[10px]",
  modalFormInput: "modalFormInput h-13 w-full rounded-[8px] border border-neutral bg-white px-4.5 py-4",
  modalFormError: "modalFormError text-center text-sm text-bad",
  modalFormErrorLink: "modalFormErrorLink text-center text-sm font-medium text-bad underline",

  /* page 404 */

  page404Container: "page404Container relative flex h-screen justify-center bg-white",
  page404Image: "page404Image h-[800px] w-[1200px]",
  page404TextBlock: "page404TextBlock absolute top-[400px] flex w-[700px] flex-col gap-4",
  page404Title: "page404Title text-[28px] text-404",
  page404Description: "page404Description w-[360px] leading-6",
}
