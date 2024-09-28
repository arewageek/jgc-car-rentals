import React from 'react'
import Button from '../form/Button'
import { Check, CheckCheck, CheckIcon } from 'lucide-react'
import { FaCheck, FaPlay } from 'react-icons/fa'
import { BiCheck } from 'react-icons/bi'
import CheckSVG from '../svg/CheckSVG'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <div className='py-10 lg:py-24 px-5'>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:w-[60vw] '>
                <div className='w-full lg:w-3/5 flex flex-col gap-y-2'>
                    <span className='text-[10px] font-medium uppercase text-accent-100 tracking-[6pt]'>
                        Jibhausy Global Concepts
                    </span>
                    <h2 className='font-extrabold text-2xl lg:text-3xl text-white'>
                        We Are More Than <br />
                        <span className='text-accent-100'>
                            A Car Rental Company
                        </span>
                    </h2>
                    <p className='text-xs text-white/70 mt-3 leading-loose lg:w-[80%]'>
                        Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.
                    </p>
                    <div className='text-white/70 text-xs mt-5 flex-col flex gap-y-2'>
                        <div className='flex items-center gap-x-4 '>
                            <div className=' flex items-center justify-center bg-accent-50/10 p-1.5 rounded-full text-accent-100'>
                                <Image src="/icons/check.svg" height={15} width={15} alt='check icon' />
                            </div>
                            <div>
                                Sports and Luxury Cars
                            </div>
                        </div>

                        <div className='flex items-center gap-x-4 '>
                            <div className=' flex items-center justify-center bg-accent-50/10 p-1.5 rounded-full text-accent-100'>
                                <Image src="/icons/check.svg" height={15} width={15} alt='check icon' />
                            </div>
                            <div>
                                Economy Cars
                            </div>
                        </div>

                        <div className='mt-3'>
                            <Button text='Read More' />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-2/5 min-h-full relative'>
                    <img src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/about.jpg" className='rounded-3xl h-full w-auto relative' alt="" />
                    <div className='absolute bottom-0 left-0 bg-base-100 text-white p-5 rounded-tr-3xl flex items-center'>
                        <div className='relative after:absolute after:left-0 after:top-10 after:bg-red-600'>
                            <div className='rounded-full border-[1.5px] cursor-pointer hover:bg-accent-100 transition duration-75 hover:text-base-100 border-accent-100 p-3'>
                                <FaPlay className='h-2 w-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs