import { TCar, fetchCars } from '@/actions/cars.actions.'
import SingleCarBlock from '@/components/Public/cars/SingleCarBlock'
import BookAutoRental from '@/components/Public/services/BookAutoRental'
import AddCars from '@/components/form/test/AddCars'
import { PageHeader2 } from '@/components/layouts/PageHeader'
import { Button } from '@/components/ui/button'
import { ICar } from '@/models/cars'
import React from 'react'

// export interface TCar {
//     image: string, name: string, passengers: number, cost: number, id: string, type: "auto" | "manual"
// }

// [
//     { image: "/1.jpg", name: "Lamborghini Urus", seats: 5, type: "auto", dailyCost: 200, id: '' },
//     { image: "/1.jpg", name: "Aston Martin DBX", seats: 5, type: "auto", dailyCost: 200, id: '' },
//     { image: "/1.jpg", name: "Bugatti Mistral W16", seats: 5, type: "auto", dailyCost: 200, id: '' },
//     { image: "/1.jpg", name: "Bentley Bentayga", seats: 5, type: "auto", dailyCost: 200, id: '' },
// ]


const CarsPage = async () => {
    const carsData = await (await fetchCars())
    const cars: ICar[] = carsData?.cars || []
    return (
        <div className='w-full flex flex-col gap-y-10 items-center justify-center py-10 lg:py-20'>
            <div>
                <PageHeader2 title="SELECT YOUR CAR" titleHighlight='Luxury' highlight='Car Fleet' />
            </div>

            {/* <AddCars /> */}

            <div className='w-full lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {cars.map((car, index: number) => (
                    <SingleCarBlock key={index} image={car.image} cost={car.cost} name={car.name} passengers={car.passengers} type={car.type} />
                ))}
            </div>
            <div className='w-full mt-20'>
                <BookAutoRental />
            </div>
        </div>
    )
}

export default CarsPage