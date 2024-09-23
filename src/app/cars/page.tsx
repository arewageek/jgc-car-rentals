import SingleCarBlock from '@/components/Public/cars/SingleCarBlock'
import BookAutoRental from '@/components/Public/services/BookAutoRental'
import { PageHeader2 } from '@/components/layouts/PageHeader'
import React from 'react'

export interface ICar {
    image: string, name: string, seats: number, dailyCost: number, id: string, type: "auto" | "manual"
}

const cars: ICar[] = [
    { image: "/1.jpg", name: "Lamborghini Urus", seats: 5, type: "auto", dailyCost: 200, id: '' },
    { image: "/1.jpg", name: "Aston Martin DBX", seats: 5, type: "auto", dailyCost: 200, id: '' },
    { image: "/1.jpg", name: "Bugatti Mistral W16", seats: 5, type: "auto", dailyCost: 200, id: '' },
    { image: "/1.jpg", name: "Bentley Bentayga", seats: 5, type: "auto", dailyCost: 200, id: '' },
]

const CarsPage = () => {
    return (
        <div className='w-full flex flex-col gap-y-10 items-center justify-center py-10 lg:py-20'>
            <div>
                <PageHeader2 title="SELECT YOUR CAR" titleHighlight='Luxury' highlight='Car Fleet' />
            </div>

            <div className='w-full lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {cars.map((car, index) => (
                    <SingleCarBlock key={index} image={car.image} dailyCost={car.dailyCost} id={car.id} name={car.name} seats={car.seats} type={car.type} />
                ))}
            </div>
            <div className='w-full mt-20'>
                <BookAutoRental />
            </div>
        </div>
    )
}

export default CarsPage