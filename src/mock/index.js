const Mock = require("mockjs");

const data = Mock.mock({
    "data|1000":[
        {
            "id|+1":305,
            productName:"@cname()",
            introduction:""
        }
    ]
})
console.log(data)