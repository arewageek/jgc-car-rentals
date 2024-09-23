"use client"
import React from 'react'
import { Textarea } from '../ui/textarea'
import { FaTelegramPlane } from 'react-icons/fa'
import { Button } from '../ui/button'


const ContactForm = () => {
    const handleSubmit = () => { }

    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 lg:py-20 lg:w-[70%] mx-auto'>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 items-center justify-center'>
                    <div className='pt-5'>
                        <h3 className='font-bold text-lg lg:text-2xl text-white'>Get In Touch</h3>
                    </div>
                    <div className='w-full flex justify-between gap-x-3'>
                        <input type="text" className='bg-base-300 py-4 px-5 rounded-full w-full text-sm text-white' placeholder='Your Name *' />
                        <input type="email" className='bg-base-300 py-4 px-5 rounded-full w-full text-sm text-white' placeholder='Your Email *' />
                    </div>
                    <div className='w-full flex justify-between gap-x-3'>
                        <input type="phone" className='bg-base-300 py-4 px-5 rounded-full w-full text-sm text-white' placeholder='Phone Number *' />
                        <input type="text" className='bg-base-300 py-4 px-5 rounded-full w-full text-sm text-white' placeholder='Subject *' />
                    </div>

                    <div className='w-full flex justify-between gap-x-3'>
                        <Textarea className='bg-base-300 py-4 px-5 rounded-2xl w-full text-sm text-white h-[100pt] border-none' placeholder='Subject *' />
                    </div>

                    <div className='w-full'>
                        <button className='bg-accent-100 hover:bg-accent-50 text-base-100 font-medium py-3 px-5 rounded-2xl flex items-center justify-center gap-x-2 w-full'>
                            Send
                            <FaTelegramPlane />
                        </button>
                    </div>
                </form>
            </div>

            <div className='w-full flex items-center justify-center'>
                <div className="w-full h-[300pt] py-10 bg-base-300">

                </div>
            </div>
        </div>
    )
}

export default ContactForm