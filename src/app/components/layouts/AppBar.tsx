import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'

const AppBar = () => {
  return (
    <div className='px-5 py-4 font-bold text-sm'>
      <nav className='flex items-center justify-between'>
        <Link href="/">
          Logo
        </Link>

        <div className='w-full flex items-center justify-end space-x-3'>
          <NavLinks />
        </div>
      </nav>
    </div>
  )
}

export default AppBar