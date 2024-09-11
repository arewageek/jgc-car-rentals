import React from 'react'

interface ButtonProps {
    classes?: string,
    text: string,
    type?: "submit" | "button" | "search" | "disabled"
}

const Button = ({ classes, text }: ButtonProps) => {
    return (
        <button className={`${classes} py-3 px-8 rounded-full bg-accent-100 hover:bg-accent-50 font-medium text-xs text-base-200 transition duration-300`}>
            {text}
        </button>
    )
}

export default Button