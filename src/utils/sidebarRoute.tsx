import WalletSvg from "../assets/svgs/WalletSvg"
import BankingSvg from "../assets/svgs/BankingSvg";
import CalcSvg from "../assets/svgs/CalcSvg"
import ICdashboardSvg from "../assets/svgs/ICdashboardSvg"
import PayrollSvg from "../assets/svgs/PayrollSvg"
import PeopleSvg from "../assets/svgs/PeopleSvg"
import PurchaseIconSvg from "../assets/svgs/PurchaseIconSvg"
import SettingsSvg from "../assets/svgs/SettingSvg"
import ShuttleSvg from "../assets/svgs/ShuttleSvg"
import TablerReportSvg from "../assets/svgs/TablerReportSvg"


export const sideBarRoute = [

    // welcome
    {
        icon: (isActive: boolean) => (<ShuttleSvg isActive={isActive
} />) ,
        text: "Welcome",
        route: "/welcome"
    },
    // dashboard
    {
        icon: (isActive: boolean) => <ICdashboardSvg isActive={isActive
} /> ,
        text: "Dashboard",
        route: "/dashboard",
    },
    // sales
    {
        icon: (isActive: boolean) => <WalletSvg isActive={isActive
} />  ,
        text: "Sales",
        children: [
            {
                text: "sales",
                route: "/sales"
            }
        ]
    },
    // purchases
     {
         icon: (isActive: boolean) => <PurchaseIconSvg isActive={isActive
} /> ,
        text: "Purchases",
        children: [
            {
                text: "bills",
                route:"/bills"
            },
            {
                text: "vendors",
                route:"/vendors"
            },
            {
                text: "Product & Services",
                route: "/products&services"
            },
        ]
    },
    // accounting
    {
        icon: (isActive: boolean) => <CalcSvg isActive={isActive
} />  ,
        text: "Accounting",
        children: [
            {
                text: "Accounting",
                route:"/accounting"
            }
        ]
    },
    // banking
       {
           icon: (isActive: boolean) => <BankingSvg isActive={isActive
} /> ,
        text: "Banking",
        children: [
            {
                text: "Banking",
                route:"/banking"
            }
        ]
    },
    // payroll
        {
            icon: (isActive: boolean) => <PayrollSvg isActive={isActive
            } /> ,
        text: "Payroll",
        children: [
            {
                text: "Payroll",
                route:"/payroll"
            }
        ]
    },
    // reports
          {
              icon: (isActive: boolean) => <TablerReportSvg isActive={isActive
              } />,
        text: "Reports",
              route: "/reports",
        
    },
    // analytics
          
   
    {
        icon: (active: boolean) => <PeopleSvg isActive={active} /> ,
        text: "Analytics",
        children: [
            {
                text: "View Report",
                route:"/view-report"
            },
              {
                text: "To-Do",
                route:"/to-do"
            },
                {
                text: "Upload Docs",
                route:"/upload-docs"
            },
                  {
                text: "Chat",
                route:"/chat"
            },
                    {
                text: "Schedule",
                route:"/schedule"
            },
                      {
                text: "Message Board",
                route:"/message-board"
            },
                        {
                text: "Make Payments",
                route:"/make-Payments"
            },
                          {
                text: "Billing",
                route:"/billing"
            },
            
        ]
    },
     // settings
       {
           icon: (active: boolean) => <SettingsSvg isActive={active} /> ,
        text: "Settings",
           route: "/settings",
        
    },
]