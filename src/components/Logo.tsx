import React from 'react'
import { Logo } from "../assets/images"

interface LogoProps { }


function HomeLogo(props: LogoProps) {
    return (
        <div className="flex p-3 rounded-2xl justify-between items-center h-14 bg-white w-64 shadow-lg">
            <img src={Logo} alt="logo-imagep" className="h-10" />
            <h1 className="font-gilroy text-xl">HostBeak</h1>
            <div>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.624878 18.75L9.87488 9.5L0.624878 0.25" fill="#76C3FC" />
                </svg>

            </div>
        </div>
    )
}

export default HomeLogo