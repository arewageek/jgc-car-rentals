import SectionHeader from '@/components/layouts/SectionHeader'
import React from 'react'
import EmblaCarousel from './embla/EmblaCarousel'

export interface ICarsSlide {
    image: string,
    name: string
}

const slides: ICarsSlide[] = [
    { image: '/images/1.jpg', name: 'Toyota' },
    { image: '', name: 'Honda' }
]
const options = {}

const CarsCarousel = () => {
    return (
        <div className='p-10 lg:p-20 w-full'>
            <SectionHeader title='select your car' label='Luxury' highlight='Car Fleet' />
            <div className='mt-4 w-full lg:px-20 flex items-center justify-center'>
                <EmblaCarousel slides={slides} options={options} />

            </div>
        </div>
    )
}

export default CarsCarousel