
import type { ServiceInterface } from './ServicesGrid'


const SingleService = ({ title, desc, index }: ServiceInterface) => {
    return (
        <div className='rounded-2xl bg-base-300 text-gray-400 group cursor-pointer'>
            <div className='py-8 lg:py-16 px-4 lg:px-8'>
                <h3 className='text-2xl font-bold text-white'>{title}</h3>
                <p className='text-[10pt] text-gray-400 mt-4'>
                    {desc}
                </p>
            </div>
            <div className='w-full mt-4 relative pt-10'>
                <div className='absolute bg-base-100 p-5 -bottom-4 -left-4 rounded-full'>
                    <div className='w-[40pt] h-[40pt] bg-accent-100 rounded-full flex items-center justify-center text-xs font-extrabold text-base-100 group-hover:bg-base-100 group-hover:text-accent-100 transition border-[1.5px] border-base-300'>
                        {index}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SingleService2 = ({ title, desc, index }: ServiceInterface) => {
    return (
        <div className='rounded-2xl bg-base-300 text-gray-400 group cursor-pointer'>
            <div className='py-8 lg:py-16 px-4 lg:px-8'>
                <h3 className='text-2xl font-bold text-white'>{title}</h3>
                <p className='text-[10pt] text-gray-400 mt-4'>
                    {desc}
                </p>
            </div>
            <div className='w-full mt-4 relative pt-10'>
                <div className='absolute bg-base-100 p-5 -bottom-4 -left-4 rounded-full'>
                    <div className='w-[40pt] h-[40pt] bg-base-300 rounded-full flex items-center justify-center text-xs font-extrabold group-hover:text-accent-100 group-hover:bg-base-100 text-white transition border-[1.5px] border-base-300 '>
                        {index}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleService