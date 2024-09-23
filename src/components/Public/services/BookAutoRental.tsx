import { Button } from '@/components/ui/button'
import React from 'react'

const BookAutoRental = () => {
    return (
        <div className='w-full bg-[url("/2.jpg")] bg-cover bg-top bg-fixed'>
            <div className='w-full h-full bg-black/60 py-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-y-4 justify-center items-center w-full px-10 lg:px-20'>
                        <h4 className='text-xs font-medium text-accent-100 tracking-[5pt]'>
                            RENT NOW
                        </h4>
                        <h2 className='text-white text-5xl font-extrabold'>
                            Book Auto Rental
                        </h2>
                        <div className='w-full'>
                            <form className='w-full bg-base-100 px-4 py-10 lg:rounded-full rounded-2xl divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-600 flex flex-col lg:flex-row lg:gap-x-4 h-full items-center'>
                                <div className='w-full lg:w-1/6 flex items-center justify-between'>
                                    <select name="carType" id="carType" className="transparent-form-inputs">
                                        <option>Choose Car Type</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                    </select>
                                </div>

                                <div className='w-full lg:w-1/6 flex items-center justify-between'>
                                    <select name="carType" id="carType" className="transparent-form-inputs">
                                        <option>Pick Up Location</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                    </select>
                                </div>

                                <div className='w-full lg:w-1/6 flex items-center justify-between'>
                                    <select name="carType" id="carType" className="transparent-form-inputs">
                                        <option>Pick Up Date</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                    </select>
                                </div>

                                <div className='w-full lg:w-1/6 flex items-center justify-between'>
                                    <select name="carType" id="carType" className="transparent-form-inputs">
                                        <option>Drop Off Location</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                    </select>
                                </div>

                                <div className='w-full lg:w-1/6 flex items-center justify-between'>
                                    <select name="carType" id="carType" className="transparent-form-inputs">
                                        <option>Return Date</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                        <option value="convertible">Convertible</option>
                                    </select>
                                </div>

                                <div className='w-full lg:w-fit flex items-center justify-center px-2 '>
                                    <Button className='rounded-xl font-bold text-sm text-base-100 bg-accent-100 hover:bg-accent-50 transision px-6 py-4'>
                                        Rent Now
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

export default BookAutoRental