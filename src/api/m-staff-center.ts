import { axios } from "./http/axios"
import * as T from './types/types'

export const getUser = (params: T.userParams) => {
    return axios({
        url: "/m-staff-center/api/v1/merchantUser/getCompanyListByUser",
        method: "get",
        params,
        config: {
            timeout: 10000
        }
    })
} 