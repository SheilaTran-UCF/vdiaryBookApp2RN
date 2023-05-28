import Network from '../Network/Network';
import { ResponseTubeAPI } from '../type';

export default { getListByHashtag };

function getListByHashtag<T>(hashtag: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const url = `/v1/history/conversion?hashtags=${hashtag}&hashtagType=postnews`;
        Network.authorizedRequestTube<ResponseTubeAPI>(url, 'GET')
            .then(response => {
                resolve(response.results);
            })
            .catch(error => {
                console.warn('a', url);
                console.warn(error);
                reject(error);
            });
    });
}
