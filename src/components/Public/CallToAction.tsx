import React from 'react'
import SectionHeader from '../layouts/SectionHeader'
import { FaWhatsapp } from 'react-icons/fa'
import AButton from '../form/Button'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const CallToAction = () => {
    return (
        <div className='w-full bg-[url("/1.jpg")] bg-top bg-cover bg-fixed'>
            <div className='w-full h-full bg-black/60 flex flex-col items-center justify-center gap-y-3 py-20 lg:py-40'>
                <SectionHeader label='Interesting in Renting?' title='RENT YOUR CARS' />
                <div className='flex items-center justify-center gap-y-10 flex-col'>
                    <p className='text-xs font-medium text-white'>
                        Don't hesitate to send us a message right away
                    </p>
                    <div className='flex items-center justify-center gap-x-7'>
                        <AButton text='Whatsapp' icon={<FaWhatsapp />} classes='hover:-translate-y-2' />

                        <AButton text='Rent Now' icon={<ArrowTopRightIcon />} outline={true} classes='hover:-translate-y-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction