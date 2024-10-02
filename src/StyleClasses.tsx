// @ts-nocheck
// there is system file to build sharedStyles.ts
// you can use `npm run prebuild` + `npm run dev`

import { sharedStyles } from "./sharedStyles.ts"

function StyleClasses() {
  return (
    <>
      {/* shared */}
      <shadowedBlock className="shadow-3xl hover:scale-105" />
      {/* card */}
      <card className="h-[501px] w-[360px] rounded-[30px] bg-white shadow-3xl" />
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
      <progressBack className="bsolute h-[6px] w-full rounded-[50px] bg-light-bg" />
      <progressFront className="absolute h-[6px] w-[120px] rounded-[50px] bg-work" />
    </>
  )
}
