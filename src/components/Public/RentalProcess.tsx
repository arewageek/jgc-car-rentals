import React from 'react'
import SectionHeader from '../layouts/SectionHeader'
import RequestRideStep from './RequestRideStep'
import { FaInfo, FaInfoCircle } from 'react-icons/fa'

interface StepsInterface {
    title: string,
    description: string,
    index: string
}

const steps: StepsInterface[] = [
    {
        title: "Choose a Car",
        description: "View our range of cars, find your perfect car for the coming days.",
        index: "01."
    },
    {
        title: "Book Car",
        description: "Book your desired car and process payment online or in person",
        index: "02."
    },
    {
        title: "Enjo Driving",
        description: "Enjoy you moments driving in our classic and comfy rides.",
        index: "03."
    }
]

const RentalProcess = () => {
    return (
        <div className='py-10 lg:py-24 px-5'>
            <SectionHeader title='STEPS' label='Car Rental' highlight='Process' />
            <div className='flex justify-center items-base gap-4 flex-col lg:flex-row mt-6'>
                {steps.map(step => (
                    <div className='h-full w-full lg:w-1/5' key={step.index} >
                        <RequestRideStep index={step.index} title={step.title} desc={step.description} />
                    </div>
                ))}
            </div>
            <div className='w-full text-center text-white/60 mt-6 text-sm flex items-center justify-center gap-4'>
                <FaInfoCircle />
                <p>
                    If you've never rented a car before, we'll guide you through the process
                </p>
            </div>
        </div>
    )
}

export default RentalProcess