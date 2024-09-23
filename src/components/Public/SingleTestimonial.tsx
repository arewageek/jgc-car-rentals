import React from 'react'
import { FaQuoteLeft, FaStar, FaStarHalf } from 'react-icons/fa'

export interface TestimonialProp {
    stars: number,
    comment: string,
    name: string,
    job: string
}

const SingleTestimonial = ({ stars, comment, job, name }: TestimonialProp) => {
    return (
        <div className='w-[300pt] h-fit shadow rounded-2xl'>
            <div className='flex w-full'>
                <div className='w-full px-3 py-5 bg-base-300 rounded-tr-3xl rounded-tl-2xl'>

                </div>
                <div className='bg-base-200 w-fit px-3 py-5 rounded-bl-3xl'>
                    <div className='flex items-center justify-center gap-x-2 text-xs text-accent-100'>
                        {Array(Math.floor(stars)).fill(0).map((_, index) => (
                            <FaStar key={index} />
                        ))}
                        {stars % 1 !== 0 && <FaStarHalf key="half-star" />}
                    </div>
                </div>
            </div>
            <div className='bg-base-300 p-4 px-8 rounded-tr-2xl rounded-b-2xl'>
                <span className='text-4xl text-accent-100 '>
                    <FaQuoteLeft />
                </span>
                <p className='text-sm py-5 text-gray-200 leading-loose'>
                    {comment}
                </p>
                <div className='mt-5'>
                    <div className='flex flex-col gap-y-1 text-white text-sm'>
                        <h3 className='font-bold'>{name}</h3>
                        <p className='text-gray-300 text-light text-xs'>
                            {job}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonial