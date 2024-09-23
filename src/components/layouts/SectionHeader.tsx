import React from 'react'

interface SectionHeadingInterface {
    title: string,
    label: string,
    highlight?: string
    afterHighlight?: string
}

const SectionHeader = ({ title, label, highlight, afterHighlight }: SectionHeadingInterface) => {
    return (
        <div className='text-center flex flex-col gap-y-3'>
            <span className='text-accent-100 text-[7.5pt] tracking-[8pt] font-medium uppercase'>
                {title}
            </span>
            <h2 className='text-white font-extrabold text-2xl lg:text-4xl'>
                {label} <span className='hl'>
                    {highlight}
                </span> {afterHighlight && afterHighlight}
            </h2>
        </div>
    )
}

export default SectionHeader