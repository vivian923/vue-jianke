import http from  "@utils/request";

export const weight_lossapi=()=>http({
    method:"get",
    url:"/v1/simple/products",
    data:{
        ids:"821617,9706,457906,14213,821621,762598,523828,817659,8034,158907,344101,183273,183433,403003,856688,254236,12275,856689",
        platform:"mobile"

       
    }
})