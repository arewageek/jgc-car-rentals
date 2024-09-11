import Image from 'next/image'
import React from 'react'

interface Cars {
    name: string
}

const cars: Cars[] = [
    { name: "Rolls Roys Cullinum" },
    { name: "Toyota Camry" }
]

const CarsSlide = () => {
    return (
        <div className='py-10 lg:py-24 px-5 hidden lg:block'>
            <div className='text-center'>
                <span className='text-accent-100 text-[9pt] tracking-widest font-medium'>
                    SELECT YOUR CAR
                </span>
                <h2 className='text-white font-extrabold text-2xl lg:text-4xl'>
                    Luxery <span className='hl'>
                        Car Fleet
                    </span>
                </h2>
            </div>

            <div className='flex overflow-x-auto gap-3 mt-6 min-h-[500px] px-5 h-auto relative'>
                {cars.map(car => {
                    return <div key={car.name} className='group relative h-full'>
                        <div className='relative h-full'>
                            <div className='overflow-hidden bg-red-500 lg:w-[800px] w-full h-auto lg:h-[400px] rounded-3xl '>
                                <Image src="/12.jpg" height="8000" width="4000" alt="car 12" className='w-full h-full group-hover:scale-[110%] transition duration-300' />
                            </div>
                            <div className='absolute -bottom-[40px] py-4 w-[80%] left-[10%] rounded-3xl bg-base-300 shadow flex items-center justify-between px-10'>
                                <h2 className='text-white text-2xl font-bold'>
                                    {car.name}
                                </h2>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default CarsSlide