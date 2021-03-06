import React from 'react'
import Disclosure from './Disclosure'
import { sideBarRoute } from "../utils/sidebarRoute"
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <div className="overflow-y-auto py-4 px-3  rounded">
            <ul className="space-y-2">
                {sideBarRoute.map(sidebar => <Disclosure Icon={sidebar.icon} text={sidebar.text} primaryRoute={sidebar.route} children={sidebar.children} />)}
            </ul>
            <div className="flex flex-col  py-3  justify-between">
                <Link to="/">
                    <div className="mb-2 h-12 w-full flex justify-center items-center space-x-4 border-0 rounded-lg">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6536 30.3633H20.4803C14.5603 30.3633 11.7069 28.03 11.2136 22.8033C11.1603 22.2566 11.5603 21.7633 12.1203 21.71C12.6536 21.6566 13.1603 22.07 13.2136 22.6166C13.6003 26.8033 15.5736 28.3633 20.4936 28.3633H20.6669C26.0936 28.3633 28.0136 26.4433 28.0136 21.0166V12.3233C28.0136 6.89662 26.0936 4.97662 20.6669 4.97662H20.4936C15.5469 4.97662 13.5736 6.56329 13.2136 10.83C13.1469 11.3766 12.6803 11.79 12.1203 11.7366C11.5603 11.6966 11.1603 11.2033 11.2003 10.6566C11.6536 5.34996 14.5203 2.97662 20.4803 2.97662H20.6536C27.2003 2.97662 30.0003 5.77662 30.0003 12.3233V21.0166C30.0003 27.5633 27.2003 30.3633 20.6536 30.3633Z" fill="#EF4444" />
                            <path d="M20.3335 17.6699H5.16016C4.61349 17.6699 4.16016 17.2166 4.16016 16.6699C4.16016 16.1233 4.61349 15.6699 5.16016 15.6699H20.3335C20.8802 15.6699 21.3335 16.1233 21.3335 16.6699C21.3335 17.2166 20.8802 17.6699 20.3335 17.6699Z" fill="#EF4444" />
                            <path d="M8.1335 22.1365C7.88017 22.1365 7.62683 22.0432 7.42683 21.8432L2.96017 17.3765C2.5735 16.9899 2.5735 16.3499 2.96017 15.9632L7.42683 11.4965C7.8135 11.1099 8.4535 11.1099 8.84017 11.4965C9.22683 11.8832 9.22683 12.5232 8.84017 12.9099L5.08017 16.6699L8.84017 20.4299C9.22683 20.8165 9.22683 21.4565 8.84017 21.8432C8.6535 22.0432 8.38683 22.1365 8.1335 22.1365Z" fill="#EF4444" />
                        </svg>

                        <p className="font-gilroy">Logout</p>
                    </div>
                </Link>

                <div className="bg-audioblue h-14 w-full flex justify-center items-center space-x-5 border-0 rounded-lg cursor-pointer">
                    <svg width="52" height="39" viewBox="0 0 52 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.216797 6.75297C0.216797 5.06182 0.888605 3.43993 2.08443 2.2441C3.28026 1.04827 4.90215 0.376465 6.5933 0.376465H44.8523C46.5435 0.376465 48.1654 1.04827 49.3612 2.2441C50.557 3.43993 51.2288 5.06182 51.2288 6.75297V9.94122H0.216797V6.75297ZM0.216797 16.3177V32.259C0.216797 33.9501 0.888605 35.572 2.08443 36.7679C3.28026 37.9637 4.90215 38.6355 6.5933 38.6355H44.8523C46.5435 38.6355 48.1654 37.9637 49.3612 36.7679C50.557 35.572 51.2288 33.9501 51.2288 32.259V16.3177H0.216797ZM9.78156 22.6942H12.9698C13.8154 22.6942 14.6263 23.0301 15.2242 23.6281C15.8222 24.226 16.1581 25.0369 16.1581 25.8825V29.0707C16.1581 29.9163 15.8222 30.7273 15.2242 31.3252C14.6263 31.9231 13.8154 32.259 12.9698 32.259H9.78156C8.93598 32.259 8.12503 31.9231 7.52712 31.3252C6.92921 30.7273 6.5933 29.9163 6.5933 29.0707V25.8825C6.5933 25.0369 6.92921 24.226 7.52712 23.6281C8.12503 23.0301 8.93598 22.6942 9.78156 22.6942Z" fill="white" />
                    </svg>
                    <p className="font-gilroy text-white text-md">Accept Payment</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar