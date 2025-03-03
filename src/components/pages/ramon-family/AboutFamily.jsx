import { AboutFamilyData } from '@/components/helper/Helper'
import { RightArrowBlackIcon, RoundCircleIcon } from '@/components/helper/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import StructureChart from './StructureChart'


export default function AboutFamily() {
  return (
    <div data-aos="flip-left" className='flex flex-wrap lg:flex-nowrap justify-between gap-4 border-2 lg:border-4 border-white/75 rounded-3xl lg:rounded-[45px] xl:rounded-[69px] relative mt-10 sm:mt-16 md:mt-28 lg:mt-48 xl:mt-60 2xl:mt-72'>
      <div className='absolute -translate-y-[45%] top-0 left-1/2 -translate-x-1/2 w-3/4 h-full max-h-14 md:max-h-20 lg:max-h-[100px] 2xl:max-h-[150px] flex justify-between gap-16 z-20'>
        <div className='w-full max-w-[100px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[300px] flex justify-start'>
          <Image src={'/assets/png/handmenu1.png'} alt='hand 1 img' width={150} height={150} className=' w-full h-auto' />
        </div>
        <div className='w-full max-w-[100px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[300px] flex justify-start'>
          <Image src={'/assets/png/hand_menu2.png'} alt='hand 2 img' width={150} height={150} className=' w-full h-auto' />
        </div>
      </div>
      <div className='w-full lg:w-[49%]'>
        <div className='pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-24 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14'>
          <h3 className='text-white text-3xl lg:text-4xl 2xl:text-5xl mb-2 !leading-[163%]'>About la Famiglia</h3>
          <p className='text-[#959595] text-lg md:text-xl xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed mt-2'>The most ruthless crypto famiglia in Web3. It's not your regular circle jerk - we're the tipo di famiglia that makes your local capo look like a discord mod. While normies stack fiat, we're building an empire that would make the Five Families look like a kindergarten playgroup.
          </p>
          <p className='text-[#959595] text-lg md:text-xl xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed mt-2'>Led by our feared Il Capo, Don Ramon, with his Underboss running this famiglia like a Colombian export business. Our hand-picked Consigliere keeps the TG streets clean and the Capos in check - these made men don't need to prove shit, they just make sure you paper-handed bitches stay in line.
          </p>
          <p className='text-[#959595] text-lg md:text-xl xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed mt-2'>La Famiglia di Ramon doesn't ask for permission - we take what's ours.
          </p>
          <h3 className='text-white text-2xl xl:text-[32px] font-helvetica-neue-condensed font-black !leading-[163%]'>Our Values</h3>
          <ul className='mb-3 md:mb-4 lg:mb-6'>
            {AboutFamilyData.map((data, index) => {
              return (
                <li key={index} className='text-white/75 flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-[26px] text-base md:text-lg xl:text-xl 2xl:text-2xl !leading-[163%]'>
                  <RoundCircleIcon />
                  <span className='font-helvetica-neue-condensed'>{data}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScsYb283pTbLWa4UlCEDbFB_RZEiT-WUX1XzkU1u_B0JcgMOA/viewform?usp=sharing'} className='group flex justify-center items-center gap-2 bg-[#B4FFA3] text-[#1B1B1B] text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] rounded-2xl md:rounded-3xl lg:rounded-[40px] xl:rounded-[51px] font-helvetica-neue-condensed font-black !leading-[163%] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_40px_#B4FFA3] text-nowrap mb-3 md:mb-4 lg:mb-6 py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-7 mx-4 xl:mx-5'>
          Enter La Famiglia <RightArrowBlackIcon />
        </Link>
      </div>
      <div className="w-full lg:w-[49%] relative scale-[101%]  mb-4 lg:mb-0">
        <StructureChart />
      </div>
    </div>
  )
}
