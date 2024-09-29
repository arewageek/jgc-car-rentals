import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import { PiHamburgerLight } from 'react-icons/pi'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const AppBar = () => {
  return (
    <div className='px-5 py-4 font-bold text-xs fixed top-0 left-0 w-full bg-white/0 backdrop-blur-md text-white shadow z-50'>
      <nav className='flex items-center justify-between w-full lg:w-[70vw] mx-auto'>
        <Link href="/" className='text-sm'>
          Logo
        </Link>

        <div className='w-full lg:flex items-center justify-end space-x-3 hidden'>
          <NavLinks />
        </div>
        <div className='lg:hidden'>
          <div className='flex items-center justify-end'>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AppBar