export const sideBarRoute = [

    // welcome
    {
        icon: "",
        text: "Welcome",
        route: "/welcome"
    },
    // dashboard
    {
        icon: "",
        text: "Dashboard",
        route: "/dashboard",
        
    },
    // sales
    {
        icon: "",
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
        icon: "",
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
        icon: "",
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
        icon: "",
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
        icon: "",
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
        icon: "",
        text: "Reports",
              route: "/reports",
        
    },
    // analytics
          
   
    {
        icon: "",
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
        icon: "",
        text: "Settings",
           route: "/settings",
        
    },
]