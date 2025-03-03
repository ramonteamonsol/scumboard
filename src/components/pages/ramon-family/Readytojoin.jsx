import { RightArrowBlackIcon } from '@/components/helper/Icon'
import Link from 'next/link'
import React from 'react'

export default function Readytojoin() {
  return (
    <div className='my-8 sm:my-12 md:my-14 lg:my-16 xl:my-20 2xl:my-24 md:pb-0 lg:pb-2 xl:pb-5 2xl:pb-10'>
      <h3 className='text-white text-center text-3xl lg:text-4xl 2xl:text-5xl mb-2 md:mb-4 !leading-[163%] pl-4 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-14'>Think You're Famiglia Material?</h3>
      <p className='text-[#959595] text-center text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed mb-3 md:mb-5 lg:mb-7'>Take your first step towards becoming a made man in crypto's most ruthless famiglia</p>
      <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScsYb283pTbLWa4UlCEDbFB_RZEiT-WUX1XzkU1u_B0JcgMOA/viewform?usp=sharing'} className='group flex justify-center items-center gap-2 w-fit mx-auto px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 py-4 lg:py-5 xl:py-7 bg-[#B4FFA3] text-[#1B1B1B] text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] rounded-2xl md:rounded-3xl lg:rounded-[40px] xl:rounded-[51px] font-helvetica-neue-condensed font-black !leading-[163%] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_40px_#B4FFA3] text-nowrap'>
        Join La Famiglia <RightArrowBlackIcon />
      </Link>
    </div>
  )
}
