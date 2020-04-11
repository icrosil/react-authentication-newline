import axios, { AxiosRequestConfig } from 'axios';

// Token might be defined in cookie/localStorage/wherever on FE side so we could identify
// user for multiple logins
const defaultUserId = '1';

export type userModel = {
  id: number;
  first_name: string;
}

export function loadUserByToken(userId = defaultUserId, requestConfig?: AxiosRequestConfig): Promise<userModel> {
    return axios(`https://reqres.in/api/users/${userId}`, requestConfig).then(({data: user}) => user.data);
}
