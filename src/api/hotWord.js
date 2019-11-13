import http from "@utils/request";

export const HotSearch=()=>http({
    method:"get",
    url:"/v2/hotword",
})