import React from 'react'
import HomeLogo from './Logo'

function Header() {
    return (
        <div className="flex  w-full justify-between py-3 px-6 mb-3">
            <HomeLogo />
            <div className="flex space-x-4 items-center">
                {/* notification icon  */}
                <div className="flex justify-center items-center h-10 w-10 border-2 border-[#E9E9E9] rounded-full relative ">

                    <div className="rounded-full h-2 w-2 bg-[#FA5F1C] absolute top-2 right-2"/>
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.787598 14.6612H16.1688" stroke="#091E46" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.74854 7.9319C1.74854 4.21542 4.76134 1.20261 8.47783 1.20261V1.20261C12.1943 1.20261 15.2071 4.21541 15.2071 7.9319V14.6612H1.74854V7.9319Z" stroke="#091E46" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.81262 14.6611V14.1611C6.63413 14.1611 6.46918 14.2563 6.37981 14.4108L6.81262 14.6611ZM10.1435 14.6611L10.5763 14.4108C10.487 14.2563 10.322 14.1611 10.1435 14.1611V14.6611ZM7.05542 15.6224C7.05542 15.3625 7.12468 15.1202 7.24542 14.9115L6.37981 14.4108C6.1734 14.7676 6.05542 15.182 6.05542 15.6224H7.05542ZM8.47808 17.0451C7.69236 17.0451 7.05542 16.4081 7.05542 15.6224H6.05542C6.05542 16.9604 7.14008 18.0451 8.47808 18.0451V17.0451ZM9.90073 15.6224C9.90073 16.4081 9.26379 17.0451 8.47808 17.0451V18.0451C9.81607 18.0451 10.9007 16.9604 10.9007 15.6224H9.90073ZM9.71073 14.9115C9.83147 15.1202 9.90073 15.3625 9.90073 15.6224H10.9007C10.9007 15.182 10.7828 14.7676 10.5763 14.4108L9.71073 14.9115ZM10.1435 14.1611H6.81262V15.1611H10.1435V14.1611Z" fill="#091E46" />
                    </svg>
                </div>

                {/* avatar/profile */}

                <div className="h-10 w-10 border-1 border-red-500 bg-[#091E46] rounded-full ">

                </div>

                {/* user name */}
                <p className="font-gilroy">Ogoluwa</p>
                {/* icon */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                
            </div>
        </div>
    )
}

export default Header