import http from  "@utils/request";

export const finds=(KeyWord)=>http({
    method:"get",
    url:"Search/SearchPanGuWordResult",
    data:{     
            KeyWord:KeyWord
    },
})

// http://m.360kad.com/Search/SearchPanGuWordResult?KeyWord=a