import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import BankingSvg from '../assets/svgs/BankingSvg'
import WalletSvg from '../assets/svgs/WalletSvg'

interface DisclosureInterface {
    primaryRoute?: string,
    Icon: (active: boolean) => JSX.Element,
    text: string,
    children?: {
        route: string,
        text: string
    }[]


}
const Disclosure = ({ Icon, primaryRoute, text, children }: DisclosureInterface) => {
    const [active, setIsActive] = useState<boolean>(false)

    const openDisclosure = () => setIsActive(!active)

    const location = useLocation()




    const getMatch = (path: string) => {
        if (path === location.pathname) return true

        return false
    }





    return (
        <>
            {children ? (
                <li onClick={openDisclosure}>
                    <div className="flex items-center py-1 px-2 w-full  rounded-lg transition duration-75 group font-gilroy cursor-pointer" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <div className={`flex items-center justify-center rounded-full h-9 w-9 ${active ? "bg-audioblue" : null}`} >
                            { Icon(active)}
                        </div>
                        <span className={`flex-1 ml-3 text-left whitespace-nowrap ${active ? "text-[#000000]" : "text-[#BFBFBF]"}`} sidebar-toggle-item>{text}</span>
                        {active ? <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 -5.24537e-07L6.5 6L12.5 0" fill="#D3D6E4" />
                        </svg> : <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http:www.w3.org/2000/svg">
                            <path d="M0 12.5L6 6.5L0 0.5" fill="#D3D6E4" />
                        </svg>
                        }
                    </div>
                    <ul id="dropdown-example" className="space-y-2">
                        {
                            children && active && (
                                <div className="flex  flex-col  mt-3  ">
                                    {children.map((child, index) => (
                                        <li key={index}>
                                            <Link to={child.route} className={`flex items-center p-2 pl-11 w-full cursor-pointer font-gilroy  rounded-lg transition duration-75 group ${getMatch(child.route) ? "text-audioblue" : "text-[#8C8C8C]"} `} >
                                                {child.text}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            )
                        }
                    </ul>
                </li>
            ) : (
                primaryRoute && <li>
                    <Link to={primaryRoute} className="flex items-center p-2 text-base font-normal text-gray-900 font-gilroy rounded-lg  ">
                        <div className={`flex items-center justify-center rounded-full h-9 w-9 ${getMatch(primaryRoute) ? "bg-audioblue" : null}`} >
                                {Icon(getMatch(primaryRoute))}
                        </div>
                        <span className={`ml-3 ${getMatch(primaryRoute) ? "text-[#000000]" : "text-[#BFBFBF]"}`}>{text}</span>
                    </Link>
                </li>
            )}
        </ >
    )
}

export default Disclosure






