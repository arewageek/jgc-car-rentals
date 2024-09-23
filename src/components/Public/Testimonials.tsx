import React from 'react'
import SectionHeader from '../layouts/SectionHeader'
import SingleTestimonial, { TestimonialProp } from './SingleTestimonial'

const reviews: TestimonialProp[] = [
    {
        comment: "Came in for walk-in inspection and oil change. Brown is delight to deal with. He took my car right in, and completed work in a short time. Highly recommend the shop.",
        name: "Sandra Ikeh", job: "Customer", stars: 2.5
    },
    {
        comment: "Came in for walk-in inspection and oil change. Brown is delight to deal with. He took my car right in, and completed work in a short time. Highly recommend the shop.",
        name: "Frank Ikechukwu", job: "Realtor", stars: 4.5
    },
    {
        comment: "Came in for walk-in inspection and oil change. Brown is delight to deal with. He took my car right in, and completed work in a short time. Highly recommend the shop.",
        name: "Steven Pete", job: "Customer", stars: 5
    }
]

const Testimonials = () => {
    return (
        <div className='lg:py-20 py:10 flex flex-col justify-center'>
            <SectionHeader title='TESTIMONIALS' label='What Clients Say' />
            <div className='flex flex-col lg:flex-row lg:gap-3 justify-center items-center gap-y-3 mt-20'>
                {
                    reviews.map((review, index) =>
                        <SingleTestimonial comment={review.comment} job={review.job} name={review.name} stars={review.stars} key={index} />
                    )
                }
            </div>
        </div>
    )
}

export default Testimonials