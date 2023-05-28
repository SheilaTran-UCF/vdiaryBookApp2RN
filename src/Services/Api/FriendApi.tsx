import Network from '../Network/Network';
import { ResponseAPI } from '../type';

function searchUser(search: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `/api/v2/user-relationship/list-suggest-friends?search=${search}&relationship=FRIEND`,
            'GET'
        )
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.warn(error);
                reject(error);
            });
    });
}

export default {
    searchUser,
};
