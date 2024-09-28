"use client"

import { createCar } from '@/actions/cars.actions.'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'


const AddCars = () => {
    const [data, setData] = useState({ name: "", image: "", passengers: 0, type: "", cost: 0, desc: "", pic1: "", pic2: "", pic3: "" })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log({ data })

        const response = await createCar(data)
        console.log({ response })
    }

    return (
        <form onSubmit={handleSubmit} className='w-1/2 mx-auto py-4 flex flex-row flex-wrap gap-2 gap-y-2 text-white'>
            <input onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} placeholder='Name' type="text" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, image: e.target.value }))} placeholder='Image' type="text" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, passengers: parseInt(e.target.value) }))} placeholder='Passengers' type="number" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, type: e.target.value }))} placeholder='Type' type="text" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, cost: parseInt(e.target.value) }))} placeholder='Cost' type="number" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, desc: e.target.value }))} placeholder='Description' type="text" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, pic1: e.target.value }))} placeholder='Pic1' type="text" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, pic2: e.target.value }))} placeholder='Image' type="text" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <input onChange={e => setData(prev => ({ ...prev, pic3: e.target.value }))} placeholder='Image' type="text" className='py-2 bg-white/20 border-2 border-accent-100 rounded-xl px-5' />
            <Button className='bg-accent-100 text-base-100 rounded w-full py-5' type="submit">
                Submit
            </Button>
        </form>
    )
}

export default AddCars