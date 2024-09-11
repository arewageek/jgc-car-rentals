import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    brand: string, logo: string, link?: string
}

const EachPartner = ({ link, brand, logo }: Props) => {
    return (
        <Link href={link ? link : '#'} className='h-20 w-20'>
            <Image alt={brand} title={brand} src={logo} width={100} height={100} className='object-cover h-full w-auto' />
        </Link>
    )
}

export default EachPartner