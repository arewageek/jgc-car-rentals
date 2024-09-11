import Link from 'next/link'
import React from 'react'
import { CgArrowTopRight } from 'react-icons/cg'
import { FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const socials = [
    { platform: "facebook", icon: <FaFacebook />, link: "#" },
    { platform: "Twitter", icon: <FaTwitter />, link: "#" },
    { platform: "Tiktok", icon: <FaTiktok />, link: "#" }
]

const quicklinks = [{ label: "About Us", link: "/about" }, { label: "Reach Us", link: "/contact" }, { label: "FAQs", link: "/faq" }, { label: "Cars", link: "cars" }]

const Footer = () => {
    return (
        <div className='w-full min-h-400pt flex flex-col lg:flex-row items-center justify-center py-10 lg:pb-20 text-white/70 px-5'>
            <div className='w-full lg:w-[60%] mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between'>
                <div className='w-full lg:w-1/3'>
                    <h2 className='font-extrabold text-white text-3xl'>
                        JGC Rentals
                    </h2>
                    <p className='text-sm leading-relaxed mt-4'>
                        Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.
                    </p>
                    <div className='flex gap-3 mt-4'>
                        {socials.map(social => <Link key={social.platform} href={social.link} className='rounded-full p-4 text-white bg-transparent border-[1.5px] border-accent-100 flex items-center justify-center hover:bg-accent-100 transition duration-200 hover:text-base-100'>
                            {social.icon}
                        </Link>)}
                    </div>
                </div>

                <div className='w-full lg:w-1/3'>
                    <h2 className='font-extrabold text-white text-3xl'>
                        Quick Links
                    </h2>
                    <ul className='text-sm leading-relaxed mt-4'>
                        {quicklinks.map(link => <Link key={link.label} href={link.link} className='hover:text-white transition'><li className='list-inside list-disc font-medium text-sm mt-2'>{link.label}</li></Link>)}
                    </ul>
                </div>

                <div className='w-full lg:w-1/3'>
                    <h2 className='font-extrabold text-white text-3xl'>
                        Subscribe
                    </h2>
                    <p className='text-sm leading-relaxed mt-4'>
                        Want to be notified about our services. Just sign up and we'll send you a notification by email.
                    </p>
                    <div className='flex gap-3 mt-4'>
                        <form className='w-full'>
                            <div className='rounded-full border-[1.5px] border-accent-100 bg-transparent flex gap-2 px-1 py-2 group hover:border-accent-50 transition duration-500'>
                                <input type="email" className='text-sm p-4 w-full border-0 bg-transparent placeholder:text-white/80 rounded-l-full focus:ring-0 focus-within:ring-0 focus-visible:ring-0' placeholder='Your email address' />
                                <button className='bg-accent-100 text-black rounded-full p-4 hover:bg-accent-50 transition duration-500'>
                                    <CgArrowTopRight className='group-hover:rotate-45 transition duration-500' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer