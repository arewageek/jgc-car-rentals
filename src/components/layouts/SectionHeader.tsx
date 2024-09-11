import React from 'react'

interface SectionHeadingInterface {
    title: string,
    label: string,
    highlight: string
    afterHighlight?: string
}

const SectionHeader = ({ title, label, highlight, afterHighlight }: SectionHeadingInterface) => {
    return (
        <div className='text-center'>
            <span className='text-accent-100 text-[9pt] tracking-widest font-medium uppercase'>
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