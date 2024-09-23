import { ICar } from '@/app/cars/page'
import { Button } from '@/components/ui/button'
import { GearIcon, PersonIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'
import { FaChair } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'

const SingleCarBlock = ({ image, name, dailyCost, id, seats, type }: ICar) => {
    return (
        <div className='w-full relative py-8 h-fit'>
            <div className='w-full overflow-hidden lg:rounded-2xl rounded-t-2xl'>
                <Image src={image} alt={name} width={600} height={600} className='w-full h-fit hover:scale-110 transition duration-200' />
            </div>
            <div className='w-full lg:w-[90%] mx-auto lg:left-[5%] bg-base-300 shadow rounded-b-2xl lg:rounded-2xl py-4 px-6 lg:absolute lg:-mt-10 flex items-center justify-between'>
                <div>
                    <h2 className='text-lg md:text-lg lg:text-2xl font-bold text-white'>
                        {name}
                    </h2>
                    <div className='flex items-center justify-start gap-3 mt-3 text-gray-300 capitalize'>
                        <div className='flex items-center text-xs md:text-xs lg:text-sm font-semobold gap-x-1'>
                            <FaPerson className='text-accent-100' />
                            5
                        </div>

                        <div className='flex items-center text-xs md:text-xs lg:text-sm font-semobold gap-x-1'>
                            <GearIcon className='text-accent-100' />
                            {type}
                        </div>

                        <div className='flex items-center text-xs md:text-xs lg:text-sm font-semobold gap-x-1'>
                            <FaChair className='text-accent-100' />
                            {seats} seats
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-around gap-2'>
                    <Button className='font-light text-xs md:text-xs lg:text-sm bg-accent-100 text-base-100 hover:bg-accent-50 transition rounded-2xl py-6'>
                        Details
                    </Button>
                    <div className='p-1'>
                        <div className='font-bold text-lg lg:text-2xl text-accent-100'>{dailyCost}</div>
                        <div className='text-gray-300 text-xs md:text-xs lg:text-sm'>/day</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCarBlock