import React from 'react'

interface Props {
    title: string,
    desc: string,
    index: string
}

const RequestRideStep = ({ title, desc, index }: Props) => {
    return (
        <div className='bg-base-300 rounded-3xl min-h-full'>
            <div className='pb-20 pt-10 px-12'>
                <h2 className='text-white font-extrabold text-xl'>{title}</h2>
                <p className='text-sm text-white/60 mt-3 leading-relaxed'>{desc}</p>
            </div>
            <div className='relative py-2'>
                <div className='bg-base-100 absolute bottom-0 left-0 p-4 rounded-tr-[50%] text-white font-bold tracking-widest text-lg after:content-[""] after:bg-base-100 after:absolute after:-right-4 after:h-6 after:w-8 after:rounded-full'>
                    <div className='rounded-full bg-base-300 p-3'>
                        {index}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestRideStep