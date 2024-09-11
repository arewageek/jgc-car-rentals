import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import EachPartner from './EachPartner'

interface PartnersInterface {
    logo: string,
    name: string,
    url?: string
}

const partners: PartnersInterface[] = [
    { logo: '/brands/benz.png', name: 'Toyota' },
    { logo: '/brands/toyota.png', name: 'Toyota' },
    { logo: '/brands/honda.png', name: 'Honda' }
]

const Partners = () => {
    return (
        <div className='py-20 px-10 flex gap-x-10'>
            {partners.map(partner => <EachPartner key={partner.name} brand={partner.name} link={partner.url} logo={partner.logo} />)}
        </div>
    )
}

export default Partners