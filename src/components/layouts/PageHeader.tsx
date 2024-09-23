import React from 'react'

interface Props {
    title: string,
    titleHighlight: string,
    customHighlight?: boolean,
    highlight?: "Jibhausy Global Concepts" | string
    classes?: string
}

export const PageHeader = ({ title, customHighlight, highlight, titleHighlight }: Props) => {
    return (
        <div className='w-screen h-[400pt] bg-[url("/car-0.jpg")] bg-fixed bg-cover bg-center'>
            <div className='w-full h-full p-5 bg-black/60 flex items-center px-10 justify-center lg:justify-start lg:px-20'>
                <div className='flex flex-col gap-y-4 w-full lg:w-3/4 mx-auto'>
                    <h4 className='text-xs font-medium text-accent-100 tracking-[5pt]'>
                        {highlight}
                    </h4>
                    <h2 className='text-white text-5xl font-extrabold'>
                        {title} <span className='text-accent-100'>{titleHighlight}</span>
                    </h2>
                </div>
            </div>

        </div>
    )
}

export const PageHeader2 = ({ title, titleHighlight, highlight, classes }: Props) => {
    return (
        <div className='w-screen h-[400pt] bg-[url("/11.jpg")] bg-fixed bg-cover bg-center'>
            <div className='w-full h-full p-5 bg-black/60 flex items-center px-10 justify-center lg:px-20'>
                <div className='flex flex-col gap-y-4 justify-center items-center'>
                    <h4 className='text-xs font-medium text-accent-100 tracking-[5pt]'>
                        {title}
                    </h4>
                    <h2 className='text-white text-5xl font-extrabold'>
                        {titleHighlight} <span className='text-accent-100'>{highlight}</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default PageHeader