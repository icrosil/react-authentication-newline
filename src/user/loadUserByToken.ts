import axios, { AxiosRequestConfig } from 'axios';

let userLoginSubscription: EventSource | null = null;

// Token might be defined in cookie/localStorage/wherever on FE side so we could identify
// user for multiple logins
const defaultUserId = '1';

export type userDetail = {
  id: number;
  first_name: string;
};

export type userAd = {
  company: string;
}

export type userModel = {
  data: userDetail;
  ad: userAd;
};

export function loadUserByToken(userId = defaultUserId, requestConfig?: AxiosRequestConfig): Promise<userModel> {
    return axios(`https://reqres.in/api/users/${userId}`, requestConfig).then(({data: user}) => user);
}

export function releaseUserLogout() {
  userLoginSubscription?.close();
}

export function checkForUserLogout(userId: string, cb: () => void) {
  userLoginSubscription = new EventSource(`http://localhost:3030/eventstream/${userId}`);
  userLoginSubscription.addEventListener("message", (event) => {
    const {isLogin} = JSON.parse(event.data);
    if (!isLogin) {
      cb();
    }
  });
  return userLoginSubscription;
}
