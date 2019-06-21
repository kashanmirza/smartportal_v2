const gridColumn = {
    serviceCategoryByParentInfo:[{
            name : "Service Category Name",
            dbField:"serviceCategoryDescEn",
            type : "string"
        },
        {
            name : "Parent Service Category Name",
            dbField:"parentServiceCategoryNameEn",
            type : "string"
        },
        {
            name : "Status",
            dbField:"active",
            type : "string"
        },
        {
            name : "Action",
            dbField:"",
            type : "string"
        }]
};

export default gridColumn;