import React from 'react'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrLocationPin } from 'react-icons/gr'


const ContactBlock = () => {

    const contactMeans = [
        { icon: <FaPhoneAlt />, title: "Call Us", details: "+971 52-333-4444" },
        { icon: <BsEnvelopeFill />, title: "Write to Us", details: "info@brand.com" },
        { icon: <GrLocationPin />, title: "Address", details: "Office Address" },
    ]

    return (
        <div className='w-full flex flex-col items-center justify-center lg:flex-row lg:w-[60%] py-10 lg:pb-20 px-5'>
            <div className='border-[1px] border-white/10 rounded-xl p-5 w-full divide-y-[1px] lg:divide-y-0 lg:divide-x-[1px] divide-white/10 flex flex-col lg:flex-row items-center gap-2'>
                {contactMeans.map(contact => <div key={contact.title} className='flex items-center justify-start gap-5 w-full lg:w-1/3 pl-5'>
                    <div>
                        <div className='bg-accent-100 text-base-100 text-light rounded-full p-6 text-xl'>
                            {contact.icon}
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-white font-bold text-xs'>
                            {contact.title}
                        </h3>
                        <p className='text-white/80 text-md'>
                            {contact.details}
                        </p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default ContactBlock