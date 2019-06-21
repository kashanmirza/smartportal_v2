const menu = [
    {
        title:"Security",
        id:1,
        icon:"fa fa-cog",
        to:"/app/dummy",
        sideMenu:[
            {
                title:"User Management",
                id:2,
                icon:"fa fa-cog",
                to:"/app/Form"
            },
            {
                title:"Organization Management",
                id:3,
                icon:"fa fa-shield",
                to:"/app/OrganizationManagement"
            }
        ]
    }
]

export default menu;