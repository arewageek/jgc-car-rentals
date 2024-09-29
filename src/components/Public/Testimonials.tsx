import React from 'react'
import SectionHeader from '../layouts/SectionHeader'
import SingleTestimonial, { TestimonialProp } from './SingleTestimonial'

const reviews: TestimonialProp[] = [
    {
        comment: "Renting from Jibhausy Global Concepts was a breeze! Their website was easy to navigate, and the booking process was seamless. The car was clean and in excellent condition. I would definitely recommend them to anyone looking for a reliable car rental service.",
        name: "Amina Bello", job: "Customer", stars: 5
    },
    {
        comment: "I was very impressed with the customer service at Jibhausy Global Concepts. The staff were friendly and helpful, and they went above and beyond to ensure I had a great experience. The car I rented was perfect for my trip, and I had no issues at all.",
        name: " David Oluwaseun", job: "Marketing Manager", stars: 4.5
    },
    {
        comment: "Jibhausy Global Concepts offered the best value for money compared to other car rental companies I researched. The rental process was straightforward, and the car was exactly as described. I will definitely be using their services again in the future.",
        name: "Chioma Okoye", job: "Teacher", stars: 5
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