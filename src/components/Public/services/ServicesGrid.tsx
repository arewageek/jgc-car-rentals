import React from 'react'
import SingleService from './SingleService'

export interface ServiceInterface {
    title: string,
    desc: string,
    slug?: string,
    index?: number
}

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ullam doloremque nam impedit. Possimus distinctio consequatur"

const services: ServiceInterface[] = [
    { title: "Corporate Car Rental", desc: lorem },
    { title: "Car Rental with Driver", desc: lorem },
    { title: "Airport Transfer", desc: lorem },
    { title: "Fleet Leasing", desc: lorem },
    { title: "VIP Transfer", desc: lorem },
    { title: "Private Transfer", desc: lorem }
]

const ServicesGrid = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:w-[60%] mx-auto lg:gap-y-16 gap-y-8'>
            {
                services.map((service, index) => <SingleService key={index} title={service.title} desc={service.desc} index={index + 1} />)
            }
        </div>
    )
}

export default ServicesGrid