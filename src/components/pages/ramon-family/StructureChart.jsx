import Image from 'next/image'
import React from 'react'

export default function StructureChart() {
  return (
    <div className='lg:border-4 border-green-300 rounded-3xl lg:rounded-[45px] xl:rounded-[69px]   w-full lg:px-4 py-4 pt-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-24 space-y-10 2xl:space-y-16 max-w-[700px] xl:max-w-none mx-auto h-full px-3.5 sm:px-4'>
      <div className='flex justify-center gap-3 relative'>
        <span className='text-[#1B1B1B] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] font-black !leading-[163%] font-helvetica-neue-condensed bg-[#B4FFA3] rounded-2xl py-3 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center shadow-[0_0_70px_1px_#B4FFA3] border border-white relative'>Boss
          <span className='absolute bottom-full right-2 translate-x-1/2 translate-y-1/2 z-20 inline-block animate-pulse'>
            <Image src={'/assets/png/star.png'} alt={'star img'} width={100} height={100} />
          </span>
          <span className='absolute top-full left-2 -translate-x-1/2 -translate-y-1/2 z-20 inline-block animate-pulse delay-100'>
            <Image src={'/assets/png/star.png'} alt={'star img'} width={50} height={50} />
          </span>
        </span>
        <span className='inline-block absolute top-full h-[225px] 2xl:h-[250px] w-0.5 md:w-1 py-2 2xl:py-4'>
          <span className='bg-[#555] block w-full h-full'></span>
        </span>
      </div>

      <div className='flex justify-center items-center w-full gap-9 2xl:gap-16 h-[100px] md:h-[150px] 2xl:h-[150px]'>
        <span className='text-[#B4FFA3] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] border border-[#B4FFA3] rounded-2xl py-2.5 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center -translate-y-3/4 relative shadow-[0_0_70px_1px_#B4FFA3]'>Underboss
          <span className='inline-block absolute left-full top-1/2 -translate-y-1/2 w-6 2xl:w-12 h-0.5 md:h-1 px-2 2xl:px-4'>
            <span className='bg-[#555] block w-full h-full'></span>
          </span>
        </span>
        <span className='text-[#1B1B1B] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#E04B77] rounded-2xl py-2.5 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center translate-y-1/2 relative'>Consigliere
          <span className='inline-block absolute right-full top-1/2 -translate-y-1/2 w-6 2xl:w-12 h-0.5 md:h-1 px-2 2xl:px-4'>
            <span className='bg-[#555] block w-full h-full'></span>
          </span>
        </span>
      </div>

      <div className='flex justify-center gap-3 relative'>
        <span className='inline-block absolute bottom-full h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
          <span className='bg-[#555] block w-full h-full'></span>
        </span>
        <span className='absolute bottom-full h-10 2xl:h-16 w-full px-10 min-[400px]:px-20 min-[500px]:px-28 sm:px-44 min-[700px]:px-52 md:px-44 lg:px-20 xl:px-28 flex justify-center items-center'>
          <span className='bg-[#555] block w-full h-0.5 md:h-1 relative after:absolute after:bg-[#555] after:w-0.5 md:after:w-1 after:h-4 after:left-0 before:absolute before:bg-[#555] before:w-0.5 md:before:w-1 before:h-4 before:right-0'></span>
        </span>
        <span className='text-[#E04B77] border border-[#E04B77] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center relative'>Capo
          <span className='inline-block absolute top-full left-1/2 -translate-x-1/2 h-6 2xl:h-12 w-0.5 md:w-1 py-2 2xl:py-4'>
            <span className='bg-[#555] block w-full h-full'></span>
          </span>
        </span>
        <span className='text-[#E04B77] border border-[#E04B77] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center'>Capo</span>
        <span className='text-[#E04B77] border border-[#E04B77] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center relative'>Capo
          <span className='inline-block absolute top-full left-1/2 -translate-x-1/2 h-6 2xl:h-12 w-0.5 md:w-1 py-2 2xl:py-4'>
            <span className='bg-[#555] block w-full h-full'></span>
          </span>
        </span>
        <span className='inline-block absolute top-full h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
          <span className='bg-[#555] block w-full h-full'></span>
        </span>
        <span className='absolute top-full h-10 2xl:h-16 w-full px-6 sm:px-16 md:px-24 lg:px-14 xl:px-16 2xl:px-20 flex justify-center items-center'>
          <span className='bg-[#555] block w-full h-0.5 md:h-1 relative after:absolute after:bg-[#555] after:w-0.5 md:after:w-1 after:h-4 after:left-0 before:absolute before:bg-[#555] before:w-0.5 md:before:w-1 before:h-4 before:right-0'></span>
        </span>
      </div>

      <div className='space-y-2 lg:space-y-3 xl:space-y-4 relative'>
        <div className='flex justify-center gap-2 md:gap-3'>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
            <span className='inline-block absolute bottom-full left-1/2 -translate-x-1/2 h-6 2xl:h-12 w-0.5 md:w-1 py-2 2xl:py-4'>
              <span className='bg-[#555] block w-full h-full'></span>
            </span>
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
            <span className='inline-block absolute bottom-full left-1/2 -translate-x-1/2 h-6 2xl:h-12 w-0.5 md:w-1 py-2 2xl:py-4'>
              <span className='bg-[#555] block w-full h-full'></span>
            </span>
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='absolute top-full h-10 2xl:h-16 w-full px-6 min-[425px]:px-10 sm:px-14 md:px-20 lg:px-10 xl:px-16 2xl:px-28 flex justify-center items-center'>
            <span className='bg-[#555] block w-full h-0.5 md:h-1 relative after:absolute after:bg-[#555] after:w-0.5 md:after:w-1 after:h-6 after:left-0 after:-translate-y-[40%] before:absolute before:bg-[#555] before:w-0.5 md:before:w-1 before:h-6 before:right-0 before:-translate-y-[40%]'></span>
          </span>
          <span className='inline-block absolute top-full h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
            <span className='bg-[#555] block w-full h-full'></span>
          </span>
        </div>
        <div className='flex justify-center gap-2 md:gap-3'>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
        </div>
        <div className='flex justify-center gap-2 md:gap-3'>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
        </div>
        <div className='flex justify-center gap-2 md:gap-3'>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
            Soldier
          </span>
          <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
        </div>
      </div>

      <div className='space-y-2 lg:space-y-3 xl:space-y-4 relative'>
        <div className='flex justify-center gap-2 md:gap-3'>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center px-1.5'>Associate</span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative px-1.5'>
            Associate
            <span className='inline-block absolute bottom-full left-1/2 -translate-x-1/2 h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
              <span className='bg-[#555] block w-full h-full'></span>
            </span>
          </span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center px-1.5'>Associate</span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative px-1.5'>
            Associate
            <span className='inline-block absolute bottom-full left-1/2 -translate-x-1/2 h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
              <span className='bg-[#555] block w-full h-full'></span>
            </span>
          </span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center px-1.5'>Associate</span>
        </div>
        <div className='flex justify-center gap-2 md:gap-3'>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center px-1.5'>Associate</span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative px-1.5'>
            Associate
          </span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center px-1.5'>Associate</span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative px-1.5'>
            Associate
          </span>
          <span className='text-white text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center px-1.5'>Associate</span>
        </div>
      </div>
    </div>
  )
}
