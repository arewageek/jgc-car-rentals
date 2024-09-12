"use client"

import Image from 'next/image'
import React from 'react'
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel'

interface Cars {
    name: string
}

const cars: Cars[] = [
    { name: "Rolls Roys Cullinum" },
    { name: "Toyota Camry" },
    { name: "Venza" },
    { name: "Honda Camry" },
    { name: "Toyota" },
]

const options: ReactElasticCarouselProps = {
    isRTL: false,
    autoPlaySpeed: 3000,
    enableAutoPlay: true,
    itemsToShow: 2,
    enableSwipe: true,
    showEmptySlots: true
}

const CarsSlide = () => {
    return (
        <div className='py-10 lg:py-24 px-5 hidden lg:block w-full'>
            <div className='text-center'>
                <span className='text-accent-100 text-[9pt] tracking-widest font-medium'>
                    SELECT YOUR CAR
                </span>
                <h2 className='text-white font-extrabold text-2xl lg:text-4xl'>
                    Luxery <span className='hl'>
                        Car Fleet
                    </span>
                </h2>
            </div>

            <div className='flex overflow-x-auto gap-3 mt-6 min-h-[500px] px-5 h-auto relative w-full'>


                <Carousel {...options} className='w-full'>
                    {cars.map(car => {
                        return <div key={car.name} className='group relative h-full w-full'>
                            <div className='relative h-full'>
                                <div className='p-4'>
                                    <div className='overflow-hidden bg-[url("/12.jpg")] bg-center bg-cover hover:scale-110 transis w-full h-[400px] rounded-3xl p-5'>
                                        {/* <Image src="/12.jpg" height="8000" width="4000" alt="car 12" className='w-full h-full group-hover:scale-[110%] transition duration-300' /> */}
                                    </div>
                                </div>
                                <div className='absolute -bottom-[40px] py-4 w-[80%] left-[10%] rounded-3xl bg-base-300 shadow flex items-center justify-between px-10'>
                                    <h2 className='text-white text-2xl font-bold'>
                                        {car.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default CarsSlide