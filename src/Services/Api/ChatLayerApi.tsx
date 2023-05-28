import Network from '../Network/Network';
import { ResponseAPI } from '../type';

function getListFriend<T>(
  offset: number,
  limit: number,
  keyword: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/chat/friend?offset=${offset}&limit=${limit}&name=${keyword}`,
      'GET',
    )
      .then(response => {
        // console.log('response get list user chat', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function getListConversation<T>(): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequestChat<ResponseAPI>(`/v1/historychat`, 'GET')
      .then(response => {
        // console.log('response get list user chat', response);
        resolve(response);
      })
      .catch(error => {
        console.log('getListConversationco loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

export default { getListFriend, getListConversation };
