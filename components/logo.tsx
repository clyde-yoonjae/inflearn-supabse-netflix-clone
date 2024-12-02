'use client'

import Image from "next/image"

export default function Logo(){
    return (
        <Image 
        src='/images/tmdbflix_logo.png'
        alt="logo"
        width={50}
        height={50}
        className="!w-20 h-auto"/>
    )
}