import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


function DashboardLayout() {
    return (
        <div className="w-full  bg-primaryWhite  ">
            <Header />
            <div className="flex ">
                <aside className="w-80 h-screen" >
                    <Sidebar />
                </aside>
                <main className="grow bg-white">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout