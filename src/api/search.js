import http from "@utils/request";

export const shopSearch=(content)=>http({
    method:"get",
    url:"/v2/searchs",
    data() {
        return {
            keyword:content,
            fields:"productName,productCode"
        }
    },
})