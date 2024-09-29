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
    ]
    return (
        <>
            {
                menuLinks.map((link => (
                    <Link key={link.label} href={link.path} className='cursor-pointer'>
                        {link.label}
                    </Link>
                )))
            }
        </>
    )
}

export default NavLinks