import AboutUs from '@/components/Public/AboutUs'
import CallToAction from '@/components/Public/CallToAction'
import CarVideoSection from '@/components/Public/CarVideoSection'
import Testimonials from '@/components/Public/Testimonials'
import PageHeader from '@/components/layouts/PageHeader'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <PageHeader title="About" titleHighlight='Us' highlight='Jibhausy Global Concepts' />

            <div className='mx-auto'>
                <AboutUs />
            </div>

            <CarVideoSection />
            <div className='py-10 lg:py-20'>
                <Testimonials />
            </div>
            <div>
                <CallToAction />
            </div>
        </div>
    )
}

export default AboutPage