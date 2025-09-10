import React from 'react'
import { Linkedin, Facebook, Instagram } from 'lucide-react'
import Mail from '@/assests/topNavbar/Mail'
import Whatsapp from '@/assests/topNavbar/whatsapp'
import { US, PK } from 'country-flag-icons/react/3x2'
import Link from 'next/link'

const TopNav = () => {
  return (
    <div className='hidden sm:flex justify-between items-center bg-lightGray/80 backdrop-blur-sm px-20 py-2.5 border-b border-gray-200'>
        <div className='flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer group'>
          <Mail width={20} height={20} />
          <p className='text-darkGray text-sm font-semibold group-hover:text-accent transition-colors'>info@qubitars.com</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer group'>
            <PK title="Pakistan" className="h-5 w-5 object-contain"/>
            <p className='text-darkGray text-sm font-semibold group-hover:text-accent transition-colors'>+92 302 6469153</p>
          </div>
          <div className='flex items-center gap-2 hover:text-accent transition-all duration-300 cursor-pointer group'>
            <US title="United States" className="w-5 h-5 object-contain"/>
            <p className='text-darkGray text-sm font-semibold group-hover:text-accent transition-colors'>+1 209 479 7184</p>
          </div>
          <div className="h-5 w-[1px] bg-gray-300"></div>
          <div className='flex items-center gap-3'>
            <Link href='https://www.linkedin.com/company/qubitars' target='_blank'>
            <Linkedin width={20} height={20} />
            </Link>
            <Link href='https://www.facebook.com/qubitars' target='_blank'>
            <Facebook width={20} height={20} />
            </Link>
            <Link href='https://wa.me/923026469153' target='_blank'>
            <Whatsapp width={20} height={20} />
            </Link>
            <Link href='https://www.instagram.com/qubitars' target='_blank'>
            <Instagram width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
  )
}


export default TopNav