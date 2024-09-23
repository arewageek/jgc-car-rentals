import React from 'react'

interface ButtonProps {
    classes?: string,
    text: string,
    type?: "submit" | "button" | "search" | "disabled",
    icon?: any
    children?: React.ReactNode
    outline?: true
}

const AButton = ({ classes, text, icon, outline }: ButtonProps) => {

    return (
        <button className={`${classes} py-4 px-8 rounded-full ${outline ? "text-white lg:text-sm border-[1.5px] bg-transparent border-white hover:border-accent-100 hover:bg-accent-100 hover:text-base-100 flex-row-reverse" : "bg-accent-100 hover:bg-accent-50 text-base-200"} font-medium text-xs transition duration-300 flex items-center justify-center gap-x-3 lg:px-10 lg:py-5 lg:text-sm`}>
            {icon && icon}
            {text}
        </button>
    )
}


export default AButton