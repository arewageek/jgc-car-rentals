import React from 'react'
import SectionHeader from '../layouts/SectionHeader'
import { FaPlay } from 'react-icons/fa'

const CarVideoSection = () => {
    return (
        <div className='h-[300pt] w-full bg-[url("/car-2.jpg")] bg-center bg-cover bg-fixed'>
            <div className='h-full w-full flex flex-col gap-y-10 items-center justify-center bg-black/70 p-10'>
                <SectionHeader title='Explore' label='Car' highlight='Promo' afterHighlight="Video" />

                <div className='flex w-full h-auto justify-center items-center'>
                    <div className='p-8 rounded-full border-[1.5px] border-accent-100 text-accent-50 text-4xl'>
                        <FaPlay />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarVideoSection