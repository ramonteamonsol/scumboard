import Image from 'next/image'
import React from 'react'
import FamilyRoles from './FamilyRoles'
import ClimbingRanks from './ClimbingRanks'
import FamilyBenefits from './FamilyBenefits'
import Readytojoin from './Readytojoin'
import { RightArrowBlackIcon, RoundCircleIcon } from '@/components/helper/Icon'
import { AboutFamilyData } from '@/components/helper/Helper'
import Link from 'next/link'
import AboutFamily from './AboutFamily'

function RamonFamily() {
  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      <div className="max-w-[1728px] mx-auto px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-16 overflow-hidden">
        <div className='pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]'>
          <h2 className="text-white uppercase text-[44px] md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] ">RAMON’S FAMIGLIA</h2>
        </div>
        <AboutFamily />
        <FamilyRoles />
        <ClimbingRanks />
        <FamilyBenefits />
        <Readytojoin />
      </div>
    </div>
  )
}

export default RamonFamily