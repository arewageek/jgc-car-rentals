import React from 'react'
import { SingleService2 } from './SingleService'
import { ServiceInterface } from './ServicesGrid'

const desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel in blanditiis non omnis aliquam accusantium rerum"

const services: ServiceInterface[] = [
    { title: "Daily Car Rental", desc },
    { title: "Monthly Car Rental", desc },
    { title: "Annual Car Rental", desc }
]

const WhatWeDo = () => {
    return (
        <div className='py-10 lg:py-20 bg-base-100 w-full lg:w-[60%] px-10 mx-auto'>
            <div className='text-center py-10'>
                <h4 className='text-xs font-medium text-accent-100 tracking-[5pt]'>
                    WHAT WE DO
                </h4>
            </div>
            <div className='mt-5 grid grid-col-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-5'>
                {services.map((service, index) => <SingleService2 title={service.title} desc={service.desc} key={index} index={index + 1} />)}
            </div>
        </div>
    )
}

export default WhatWeDo