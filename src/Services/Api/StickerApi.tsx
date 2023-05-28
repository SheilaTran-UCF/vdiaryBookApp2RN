import { StickersResponse, StickersResponseType } from '@/Types';
import Network from '../Network/Network';

const STICKER_URL = 'https://lucky.vdiarybook.vn';

export function getListSticker(): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        Network.authorizedRequest<StickersResponseType>(
            'v1/sticker',
            'GET',
            undefined,
            undefined,
            STICKER_URL
        )
            .then(response => {
                console.log('getListSticker:response', response);
                resolve(new StickersResponse(response));
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}
