import Link from 'next/link'
import React from 'react'

export interface LinksInterface {
    label: string,
    icon?: string,
    path: string
}


const NavLinks = () => {
    const menuLinks: LinksInterface[] = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Cars", path: "/cars" },
        { label: "Contacts", path: "/contact" },
        { label: "Team", path: "/team" }
    ]
    return (
        <>
            {
                menuLinks.map((link => (
                    <Link key={link.label} href={link.path} className='text-gray-50 hover:text-white transition cursor-pointer'>
                        {link.label}
                    </Link>
                )))
            }
        </>
    )
}

export default NavLinks