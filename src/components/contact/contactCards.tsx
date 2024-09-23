import { Clock10Icon, PhoneCall } from 'lucide-react'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'

interface IContactCard { icon: any, title: string, details: string }

const ContactCards = () => {
    const cardData: IContactCard[] = [
        { icon: <FaEnvelope />, title: "Email Us", details: "info@jgcrentals.com" },
        { icon: <FaLocationPin />, title: "Our Address", details: "Office Address in details" },
        { icon: <Clock10Icon />, title: "Opening Hours", details: "8am - 6pm, Mon - Fri" },
        { icon: <PhoneCall />, title: "Call Us", details: "+234898989899" }
    ]

    return (
        <div className='w-full lg:w-[70%] mx-auto flex gap-3 items-center justify-around flex-col lg:flex-row lg:absolute -mt-20 lg:ml-[15%]'>
            {cardData.map((card, index) => (
                <div key={index} className='w-full lg:w-1/4 bg-base-300 rounded-2xl shadow hover:bg-accent-100 transition p-5 py-7 lg:py-10 group hover:-translate-y-5'>
                    <div className='text-4xl text-accent-100 group-hover:text-base-100 transition'>
                        {card.icon}
                    </div>
                    <div className='mt-3 flex flex-col gap-y-2'>
                        <h3 className='font-extrabold text-2xl text-white group-hover:text-base-100 transition'>{card.title}</h3>
                        <p className='text-xs font-light text-gray-300 group-hover:text-base-100 transition'>
                            {card.details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactCards