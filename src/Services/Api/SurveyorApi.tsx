import Network from '../Network/Network';
import { ResponseAPI } from '../type';

function surveyorRegister(
    content: string,
    file: string,
    province: string,
    district: string,
    ward: string,
    status: 'ACTIVED' | 'PENDING' | 'REJECT' | 'FOLLOWING'
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            content,
            file,
            province,
            district,
            ward,
            // status
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/censor/request-censor', 'POST', data)
            .then(response => {
                console.log('AccountAPI:surveyor register:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function getProvinceList<T>(): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.unAuthorizedRequest<ResponseAPI>('api/v2/province', 'GET')
            .then(response => {
                console.log('response get province list', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}

function getDistrictList<T>(province: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.unAuthorizedRequest<ResponseAPI>(`api/v2/district/${province}`, 'GET')
            .then(response => {
                console.log('response get district list', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}

function getWardList<T>(province: string, district: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.unAuthorizedRequest<ResponseAPI>(`api/v2/ward/${province}/${district}`, 'GET')
            .then(response => {
                console.log('response get ward list', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}

function reportPost(post_id: string, content: Array<string>): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            post_id,
            content,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/censor/report', 'POST', data)
            .then(response => {
                console.log('AccountAPI:report post:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn('AccountAPI:report post:response', errorMsg);
                reject(errorMsg);
            });
    });
}

function getNotifySentHistoryList<T>(offset: number, limit: number): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `api/v2/profile/list-censor-notifi?limit=${limit}&offset=${offset}`,
            'GET'
        )
            .then(response => {
                console.log('response get notify sent history list', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}

function sendNotification(
    title: string,
    content: string,
    image: string,
    province: string,
    district: string,
    wards: string
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            title,
            content,
            image,
            province,
            district,
            wards,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/profile/send-notification', 'POST', data)
            .then(response => {
                console.log('AccountAPI:send notification:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function getGiftList<T>(offset: number, limit: number): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `api/v2/gift/send-user?limit=${limit}&offset=${offset}`,
            'GET'
        )
            .then(response => {
                console.log('response get gift list', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}

function sendGiftAll(
    title: string,
    content: string,
    province: string,
    districts: string,
    wards: string,
    file: string,
    link: string,
    expired: number,
    publish_date: number
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            title,
            content,
            province,
            districts,
            wards,
            file,
            link,
            expired,
            publish_date,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/gift/send-user', 'POST', data)
            .then(response => {
                console.log('AccountAPI:send gift:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}
function sendGiftLocate(
    title: string,
    content: string,
    province: string,
    file: string,
    link: string,
    expired: number,
    publish_date: number
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            title,
            content,
            province,
            file,
            link,
            expired,
            publish_date,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/gift/send-user', 'POST', data)
            .then(response => {
                console.log('AccountAPI:send gift:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}
function getIdentify<T>(): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>('api/v2/identifier', 'GET')
            .then(response => {
                console.log('response get identify', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}
function sendIdentify(
    full_name: string,
    nationality: string,
    papers: string,
    cccd: number,
    cccd_font: string,
    cccd_back: string
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            full_name,
            nationality,
            papers,
            cccd,
            cccd_font,
            cccd_back,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/identifier', 'POST', data)
            .then(response => {
                console.log('AccountAPI:send identify:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function getReportList<T>(province: number, district: number, ward: number): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `api/v2/profile/getreport?province=${province}&districts=${district}&wards=${ward}`,
            'GET'
        )
            .then(response => {
                console.log('response get report list', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}

export default {
    surveyorRegister,
    getDistrictList,
    getProvinceList,
    getWardList,
    reportPost,
    getNotifySentHistoryList,
    sendNotification,
    getGiftList,
    sendGiftAll,
    sendGiftLocate,
    sendIdentify,
    getIdentify,
    getReportList,
};
