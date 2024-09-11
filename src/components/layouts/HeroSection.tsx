import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='h-screen overflow-y-hidden top-0 w-screen flex items-center justify-around hero-section'>
            <div className='bg-black/50 h-screen w-screen absolute top-0 flex items-center lg:px-20 px-10 py-20 lg:py-0 justify-center'>
                <div className='w-full lg:w-3/4 flex items-center justify-around flex-col lg:flex-row lg:gap-4 gap-7'>
                    <div className='text-white w-full'>
                        <h5 className='uppercase font-bold text-sm lg:text-lg text-accent-100'>
                            Premium
                        </h5>
                        <h2 className='text-5xl lg:text-8xl font-bold'>
                            Rental Car
                        </h2>
                        <div className='pt-5 lg:text-md font-medium backdrop-blur-[2px] w-fit text-sm'>
                            <p>
                                Enjoy the best rides for the right moment.
                            </p>
                            <p>
                                Create memories that last a lifetime
                            </p>
                        </div>
                        <div className='mt-5'>
                            <button className='lg:py-3 py-2 lg:px-5 px-3 text-black bg-accent-100 rounded-lg font-medium hover:bg-accent-50 transition duration-300 text-xs'>
                                Learn More
                                <span></span>
                            </button>
                        </div>
                    </div>

                    <div className='flex items-center justify-end w-full'>
                        <div className='rounded-xl bg-secondary-100 w-full p-8 lg:p-10 shadow'>
                            <form className='flex flex-col gap-y-4'>
                                <div>
                                    <select className='bg-white/10 py-5 w-full rounded-2xl px-3 text-sm text-gray-100/60'>
                                        <option value="">Choose Car Type</option>
                                        <option value="Toyota">Toyota</option>
                                    </select>
                                </div>

                                <div className='flex gap-x-4'>
                                    <select className='bg-white/10 py-5 rounded-2xl px-3 text-sm text-gray-100/60 w-1/2'>
                                        <option value="">Pick UpLocation</option>
                                        <option value="Toyota">Toyota</option>
                                    </select>

                                    <select className='bg-white/10 py-5 rounded-2xl px-3 text-sm text-gray-100/60 w-1/2'>
                                        <option value="">Pick Up Date</option>
                                        <option value="Toyota">Toyota</option>
                                    </select>
                                </div>

                                <div className='flex gap-x-4'>
                                    <select className='bg-white/10 py-5 rounded-2xl px-3 text-sm text-gray-100/60 w-1/2'>
                                        <option value="">Drop Off Location</option>
                                        <option value="Toyota">Toyota</option>
                                    </select>

                                    <select className='bg-white/10 py-5 rounded-2xl px-3 text-sm text-gray-100/60 w-1/2'>
                                        <option value="">Return Date</option>
                                        <option value="Toyota">Toyota</option>
                                    </select>
                                </div>

                                <div>
                                    <Button variant={"outline"} className='w-full py-5 text-black bg-accent-100 rounded-lg font-bold hover:bg-transparent border-accent-100 transition hover:text-accent-100 border-2 duration-300'>
                                        Book Now
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection