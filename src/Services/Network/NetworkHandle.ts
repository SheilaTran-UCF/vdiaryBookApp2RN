import Authentication from '../Authentication/Authentication';
import { AxiosPromise } from 'axios';

export const NetworkHandle = <T>(response: AxiosPromise<T>): Promise<T> => {
  return new Promise((res, rej) => {
    response
      .then((responseData: any) => {
        console.log('NetworkHandle:response: ', responseData);
        // if (responseData.data.message == 200) {
        res(responseData.data);
        // }
      })
      .catch((error: any) => {
        console.log('NetworkHandle:error: ', error);
        // console.log("error.response.statusText", error.response.statusText)
        // if (error.response.status == 404) {
        //   // not found

        // } else if (error.response.status == 404) {
        //   // logged in but access to requested area is forbidden

        // } else if (error.response.status == 400) {
        //   // Bad request

        // } else if (error.response.status == 403) {
        //   // Bad request
        //   rej()

        // } else if (error.response.status == 422) {
        //   // validate failed

        // }
        if (error.response.status == 401) {
          Authentication.logout();
        }
        rej(error.response.data.message || error.response.statusText);
      });
  });
};
