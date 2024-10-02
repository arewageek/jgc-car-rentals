import SectionHeader from '@/components/layouts/SectionHeader'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'


const CarsCarousel = () => {
    return (
        <div className='p-10 lg:p-20 w-full'>
            <SectionHeader title='select your car' label='Luxury' highlight='Car Fleet' />
            <div className='mt-4 w-full lg:px-20 flex items-center justify-center'>
                <Carousel className='w-full lg:w-1/2 h-[400pt]' slot='2'>
                    <CarouselContent content='3' className='mt-4 py-10 w-full overflow-hidden'>
                        <CarouselItem>
                            <Image src="/1.jpg" width="500" height="400" alt="car1" className='w-full h-full object-cover rounded-lg' />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/2.jpg" width="500" height="400" alt="car1" className='w-full h-full object-cover rounded-lg' />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src="/12.jpg" width="500" height="400" alt="car1" className='w-full h-full object-cover rounded-lg' />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    )
}

export default CarsCarousel