import axios, { AxiosPromise } from 'axios';
import { NetworkHandle } from './NetworkHandle';

export const ERROR_CODE = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  INVALID_REQUEST: 422,
  SERVER: 500,
};

// export const BASE_URL = "https://apiv2.demomxh.work/"
export const BASE_URL = 'https://apiv2.vdiarybook.vn/';
// export const BASE_URL = "http://103.75.186.180:3101/"
// export const BASE_URL = "https://fd9bb606a893.ngrok.io/"
// export const UPLOAD_URL="http://103.75.186.180:3009/"
export const UPLOAD_URL = 'https://file.vdiarybook.vn/';
// export const UPLOAD_URL="https://filemanager.demomxh.work/"
export const SHARE_URL = 'https://vdiarybook.vn/detail-post/';

/**
 * Tube
 */

export const BASE_URL_TUBE = 'https://lucky.vdiarybook.vn/';

/**
 * ChatLayer
 */
export const BASE_URL_CHAT = 'https://chatv2.vdiarybook.vn/';

/**
 * Image
 */
export const PATH_IMAGE = BASE_URL + /storage/;
class Network {
  private static instance = new Network();
  private token = '';

  constructor() {
    if (Network.instance) {
      throw new Error(
        'Error: Instantiation failed: Use Network.getInstance() instead of new.',
      );
    }
    Network.instance = this;
  }
  public static getInstance(): Network {
    return Network.instance;
  }

  getBaseUrl(): string {
    return BASE_URL;
  }
  getPathImage(): string {
    return PATH_IMAGE;
  }
  setToken(token: string) {
    console.log('setToken', token);
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  unAuthorizedRequest<ResponseAPI>(
    url: string,
    method: 'POST' | 'PUT' | 'DELETE' | 'GET' = 'GET',
    data?: object,
    header?: object,
  ): Promise<ResponseAPI> {
    const response: AxiosPromise<ResponseAPI> = axios({
      method: method,
      url: url,
      baseURL: BASE_URL,
      data: data,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...header,
      },
    });
    // console.log('authorizedRequest:response', response);
    return NetworkHandle(response);
  }

  authorizedRequest<T>(
    url: string,
    method: 'POST' | 'PUT' | 'DELETE' | 'GET' = 'GET',
    data?: object,
    header?: object,
    baseURL?: string,
  ): Promise<T> {
    const response: AxiosPromise<T> = axios({
      method: method,
      url: url,
      baseURL: baseURL || BASE_URL,
      data: data,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
        ...header,
      },
    });

    // console.warn('TOKEN ====>', this.token)
    console.log('authorizedRequest:response: ', {
      url,
      method,
      data,
      header,
    });
    console.log('authorizedRequest:response: ', response);
    return NetworkHandle(response);
  }
  /**
   *
   * using for tube request
   */
  authorizedRequestTube<T>(
    url: string,
    method: 'POST' | 'PUT' | 'DELETE' | 'GET' = 'GET',
    data?: object,
    header?: object,
  ): Promise<T> {
    const response: AxiosPromise<T> = axios({
      method: method,
      url: url,
      baseURL: BASE_URL_TUBE,
      data: data,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
        ...header,
      },
    });

    // console.warn('TOKEN ====>', this.token)
    console.log('authorizedRequest:response: ', {
      url,
      method,
      data,
      header,
    });
    console.log('authorizedRequest:response: ', response);
    return NetworkHandle(response);
  }

  /**
   *
   * using for chat request
   */
  authorizedRequestChat<T>(
    url: string,
    method: 'POST' | 'PUT' | 'DELETE' | 'GET' = 'GET',
    data?: object,
    header?: object,
  ): Promise<T> {
    const response: AxiosPromise<T> = axios({
      method: method,
      url: url,
      baseURL: BASE_URL_CHAT,
      data: data,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
        ...header,
      },
    });

    // console.warn('TOKEN ====>', this.token)
    console.log('authorizedRequest:response: ', {
      url,
      method,
      data,
      header,
    });
    console.log('authorizedRequest:response: ', response);
    return NetworkHandle(response);
  }
  uploadimage<T>(
    url: string,
    method: 'POST' | 'PUT' | 'GET' = 'GET',
    data?: object,
    header?: object,
  ): AxiosPromise<T> {
    const response: AxiosPromise<T> = axios({
      method: method,
      url: url,
      baseURL: BASE_URL,
      data: data,
      timeout: 10000,
      headers: {
        ...header,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });
    console.log('authorizedRequest:response: ', response);
    console.log('authorizedRequest:token: ', this.token);
    return response;
  }

  uploadFormData = (url: string, formData: any) => {
    console.log('this.  open imagesssss');
    const _url = UPLOAD_URL + url;
    // console.log("this.token", this.token)
    const options = {
      method: 'POST',
      headers: {
        Accept: 'Application/json',
        // 'Content-type': "multipart/form-data",
        Authorization: `Bearer ${this.token}`,
      },
      body: formData,
    };
    console.log('options', options);
    return new Promise((res, rej) => {
      // return fetch(url, options).then(res => res.json())
      fetch(_url, options)
        .then(response => {
          console.log('response images', response);
          return response.json();
        })
        .then(json => {
          console.log('response json', json);
          res(json);
        })
        .catch(error => {
          console.log('response error', error);
          rej();
        });
      // .then(result => console.log({resultadsadsadsadsads: result}))
    });
  };
  // uploadFormData = (url: string, formData: any): Promise<any> => {
  //   // console.log("this.  open imagesssss")
  //   const _url = UPLOAD_URL + url
  //   // console.log("this.token", this.token)
  //   let options = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'Application/json',
  //       // 'Content-type': 'multipart/form-data',
  //       'Authorization': `Bearer ${this.token}`,
  //     },
  //     body: formData,
  //   };
  //   return new Promise((res, rej) => {
  //     fetch(_url, options)
  //       .then(response => {
  //         console.log('111', response)
  //         if (response.status === 200) {
  //           return response.json()
  //         } else {
  //           throw 'Uploading Error'
  //         }
  //       })
  //       .then((json) => {
  //         console.log('🚀 ~ file: Network.ts ~ line 135 ~ Network ~ .then ~ json', json)
  //         res(json);
  //       })
  //       .catch(error => {
  //         console.log('🚀 ~ file: Network.ts ~ line 137 ~ Network ~ returnnewPromise ~ error', error)
  //         rej(error)
  //       });
  //   })
  // }
  parseCoordinateToAddress = (location): Promise<any> => {
    const _url = `https://discover.search.hereapi.com/v1/revgeocode?apiKey=QjXp59qN61GP24Yfs3BvmqUHtlftzGepeWPxnzC2k-s&at=${location.lat},${location.lng}`;
    const options = {
      method: 'POST',
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${this.token}`,
      },
      body: '',
    };
    return new Promise((res, rej) => {
      fetch(_url, options)
        .then(response => {
          console.log('coordinate to address', response);
          if (response.status === 200) {
            return response.json();
          } else {
            rej();
          }
        })
        .then(json => {
          res(json);
        })
        .catch(error => {
          rej(error);
        });
    });
  };
  parseAddressToCoodinate = (address: string): Promise<any> => {
    const _url = `https://discover.search.hereapi.com/v1/geocode?q=${address}&apiKey=QjXp59qN61GP24Yfs3BvmqUHtlftzGepeWPxnzC2k-s`;
    const options = {
      // method: 'POST',
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Content-Type': 'application/json',
        // "cache-control": "no-cache",
        // 'Accept': `Bearer ${this.token}`,
      },
      // body:'',
    };
    return new Promise((res, rej) => {
      fetch(_url, options)
        .then(response => {
          // console.log('address to coordinate',response)
          if (response.status === 200) {
            return response.json();
          } else {
            rej();
          }
          // else {
          //   throw 'address  fail'

          // }
          // return response
        })
        .then(json => {
          res(json);
        })
        .catch(error => {
          rej(error);
        });
    });
  };
}

export default Network.getInstance();
