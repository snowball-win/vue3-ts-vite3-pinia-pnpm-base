import { axios } from "./http/axios"
//敏感词校验
export const getUser = (data: any) => {
    return axios({
        url: "/m-staff-center/api/v1/merchantUser/getCompanyListByUser",
        data,
        method: "get",
        config: {
            timeout: 10000
        }
    })
} 