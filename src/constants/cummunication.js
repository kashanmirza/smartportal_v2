import urlFormatter from '../helpers/urlFormatter';

const baseUrl = urlFormatter();

export default  {
    baseUrl,
    getServicesCategory: baseUrl + "/ServiceCategory/GetServiceCategories",
    getServices: baseUrl + "/Service/GetServices",
    getServicesCategoryWithParentInfo: baseUrl + "/ServiceCategory/GetServiceCategoriesWithParentInfo"
}