import React from 'react'
import Disclosure from './Disclosure'
import { sideBarRoute } from "../utils"


function Sidebar() {
    return (
        <div className=" h-screen max-w-96 px-11 ">
            <div className="flex flex-col">
                {sideBarRoute.map(sidebar => <Disclosure text={sidebar.text} primaryRoute={sidebar.route} children={sidebar.children} />)}
            </div>
            <div className=" h-12 w-full flex justify-center items-center border-0 rounded-lg">
                <p className="font-gilroy">Logout</p>
            </div>

            <div className="bg-audioblue h-12 w-full flex justify-center items-center border-0 rounded-lg">
                <p className="font-gilroy text-white text-md">Accept Payment</p>
            </div>
        </div>
    )
}

export default Sidebar