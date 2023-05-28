import Network from '../Network/Network';
import { ResponseAPI } from '../type';

function getListNotify<T>(
    status: 'NEW' | 'SEEN' | 'UNSEEN',
    offset: number,
    limit: number
): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `api/v2/notification/list?offset=${offset}&limit=${limit}${
                status ? `&status=${status}` : ''
            }`,
            'GET'
        )
            .then(response => {
                console.log('response get list notify cation', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}
function updateNotify(status: 'NEW' | 'SEEN' | 'UNSEEN', id: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            status,

            id,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/notification/update', 'PUT', data)
            .then(response => {
                console.log('AccountAPI:edit notify message:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

export default {
    getListNotify,
    updateNotify,
};
