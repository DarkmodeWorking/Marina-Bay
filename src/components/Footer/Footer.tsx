import Link from 'next/link'
import React from 'react'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { BsFillSendFill, BsTelephoneOutboundFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='mt-16'>
      <div className='container mx-auto px-4'>
        <Link href='/' className='font-black text-tertiary-dark'>
          HOTEL MARINA BAY
        </Link>
        <h4 className='font-semibold text-[40px] py-6'> Contact Us </h4>
        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p> Block-4A, Sector-5, Salt Lake City </p>
            <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className="ml-2"> bhattacharjeeanurag3@gmail.com </p>
            </div>
            <div className='flex items-center'>
              <BsTelephoneOutboundFill />
              <p className="ml-2"> +91 89109 42158 </p>
            </div>
            <div className='flex items-center pt-4'>
              <BiSolidMessageDetail />
              <p className="ml-2"> Anurag Bhattacharjee </p>
            </div>
          </div>
          <div className='flex-1 md:text-right'>
            <p className='pb-4'> Our Story </p>
            <p className='pb-4'> Get in Touch </p>
            <p className='pb-4'> Our Privacy Commitment </p>
            <p className='pb-4'> Terms of Service </p>
            <p> Customer Assistance </p>
          </div>
          <div className='flex-1 md:text-right'>
            <p className='pb-4'> Dining </p>
            <p className='pb-4'> Wellness </p>
            <p className='pb-4'> Fitness </p>
            <p className='pb-4'> Sports </p>
            <p> Events </p>
          </div>
        </div>
      </div>
      <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
    </footer>
  )
}

export default Footer