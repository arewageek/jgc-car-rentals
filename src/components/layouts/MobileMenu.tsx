"use client"

import Image from 'next/image'
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import NavLinks from './NavLinks'


const MobileMenu = () => {
    return (
        <div>

            <Sheet>
                <SheetTrigger>
                    <Image src="./icons/list.svg" height={30} width={30} alt="hambugger menu" className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle> Logo </SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col gap-y-3 items-center justify-center mt-10 font-semibold text-sm'>
                            <NavLinks />
                        </div>
                    </SheetContent>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MobileMenu