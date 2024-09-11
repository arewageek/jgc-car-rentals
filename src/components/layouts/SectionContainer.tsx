import React, { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

interface Prop {
    children: ReactNode,
    title: string, highlight: string, afterHighlight?: string, label: string
}

const SectionContainer = ({ children, title, highlight, afterHighlight, label }: Prop) => {
    return (
        <div className='py-10 lg:py-24 px-5'>
            <SectionHeader title={title} highlight={highlight} afterHighlight={afterHighlight} label={label} />
            {children}
        </div>
    )
}

export default SectionContainer