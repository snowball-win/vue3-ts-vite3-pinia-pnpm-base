import { axios } from "./http/axios"
import * as T from './types/types'

export const getUser = (data: T.userParams) => {
    return axios({
        method: "get",
        url: "/m-staff-center/api/v1/merchantUser/getCompanyListByUser",
        data,
        config: {
            timeout: 10000
        }
    })
} 