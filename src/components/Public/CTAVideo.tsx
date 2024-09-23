import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

const CTAVideo = () => {
    return (
        <div className='w-full bg-[url("/1.jpg")] bg-cover bg-top bg-fixed'>
            <div className='w-full h-full bg-black/60 py-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-y-4 justify-center items-center w-full px-10 lg:px-20'>
                        <h4 className='text-xs font-medium text-accent-100 tracking-[5pt]'>
                            EXPLORE
                        </h4>
                        <h2 className='text-white text-5xl font-extrabold'>
                            Car <span className='text-accent-100'>Promo</span> Video
                        </h2>
                        <div className='w-full items-center justify-center flex text-xl'>
                            <div className='rounded-full my-10 p-6 animate animate-pulse border-2 border-white text-white w-fit cursor-pointer'>
                                <Play />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTAVideo