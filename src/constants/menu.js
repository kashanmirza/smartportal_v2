const menu = [
    {
        title:"Services Management",
        id:1,
        icon:"fa fa-cog",
        to:"/app/ServiceCategory",
        sideMenu:[
            {
                title:"Service Category",
                id:1,
                icon:"fa fa-cog",
                to:"/app/ServiceCategory"
            },
            {
                title:"Services",
                id:2,
                icon:"fa fa-shield",
                to:"/app/Services"
            }
        ]
    }
];

export default menu;