"use server"

import { connectMongoDB } from "@/lib/db";
import type { ICar } from "@/models/cars";
import Cars from "@/models/cars";

export type TCar = { name: string, image: string, passengers: number, cost: number, type: string, desc: string, pic1: string, pic2: string, pic3: string }

export async function createCar(data: TCar): Promise<"success" | "unknownError"> {
    const { name, image, passengers, cost, type, desc, pic1, pic2, pic3 } = data

    try {
        connectMongoDB()

        const cars = new Cars({
            name, image, passengers, cost, type, desc, pic1, pic2, pic3
        })
        cars.save()

        return "success"
    }
    catch (error) {
        console.log({ error })
        return "unknownError"
    }
}

export async function fetchCars(): Promise<{ status: 200 | 404 | 500, cars?: ICar[] }> {
    try {
        const cars = await Cars.find();
        if (!cars) return { status: 404 }
        return { status: 200, cars };
    }
    catch (error) {
        console.log({ error })
        return { status: 500 }
    }
}