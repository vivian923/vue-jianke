import http from "@utils/request";
export const cityApi = _=>http({
    method:"get",
    url:"/api/cityList"
})