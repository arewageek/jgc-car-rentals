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
        { label: "Vehicles", path: "/vehicles" },
        { label: "About", path: "/about" },
        { label: "Contacts", path: "/contact" }
    ]
    return (
        <>
            {
                menuLinks.map((link => (
                    <Link key={link.label} href={link.path} className='text-black/60 hover:text-black transition'>
                        {link.label}
                    </Link>
                )))
            }
        </>
    )
}

export default NavLinks