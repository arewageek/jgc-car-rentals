import CTAVideo from '@/components/Public/CTAVideo'

import CarVideoSection from '@/components/Public/CarVideoSection'
import BookAutoRental from '@/components/Public/services/BookAutoRental'
import ServicesGrid from '@/components/Public/services/ServicesGrid'
import WhatWeDo from '@/components/Public/services/WhatWeDo'
import { PageHeader2 } from '@/components/layouts/PageHeader'
import React from 'react'

const ServicesPage = () => {
    return (
        <div>
            <PageHeader2 titleHighlight='Our' highlight='Services' title='WHAT WE DO' classes="pages-hero-services" />
            <div className='w-full px-5 lg:px-20 py-10 lg:py-24'>
                <ServicesGrid />
            </div>
            <div>
                <BookAutoRental />
            </div>
            <div>
                <WhatWeDo />
            </div>
            <div>
                <CarVideoSection />
            </div>
        </div>
    )
}

export default ServicesPage