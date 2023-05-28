import Network from '../Network/Network';
import { LoginResponseApi, LoginSocialProps, ResponseAPI, ResponseData } from '../type';

function createChat(
    name: string,
    type: 'INDIVIDUAL' | 'GROUP',
    userIds: Array<string>,
    category?: string,
    rules?: string
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            name,
            type,
            userIds,
            category,
            rules,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/conversation', 'POST', data)
            .then(response => {
                console.log('AccountAPI:create chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function editChatName(id: string, name: string, type: 'GROUP' | 'INDIVIDUAL'): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            id,
            name,
            type,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/conversation', 'PUT', data)
            .then(response => {
                console.log('AccountAPI:edit chat name:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function deleteGroupChat(id: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            id,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/conversation', 'DELETE', data)
            .then(response => {
                console.log('AccountAPI:delete group chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function addMemberToChat(memberId: string, conversationId: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            memberId,
            conversationId,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/conversation/add-member', 'POST', data)
            .then(response => {
                console.log('AccountAPI:add member to chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}
function removeMemberFromChat(memberId: string, conversationId: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            memberId,
            conversationId,
        };
        Network.authorizedRequest<ResponseAPI>(
            'api/v2/chat/conversation/remove-member',
            'DELETE',
            data
        )
            .then(response => {
                console.log('AccountAPI:remove member from chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function getListUserChat<T>(offset: number, limit: number, name: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `api/v2/chat/friend?offset=${offset}&limit=${limit}&name=${name}`,
            'GET'
        )
            .then(response => {
                console.log('response get list user chat', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}

function getListChat<T>(offset: number, limit: number, cominicated: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `api/v2/chat/conversation/getall?offset=${offset}&limit=${limit}&cominicated=${cominicated}`,
            'GET'
        )
            .then(response => {
                console.log('response get list chat', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}
function getChatDetail<T>(id: string, offset: number, limit: number): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequest<ResponseAPI>(
            `api/v2/chat/conversation?id=${id}&offset=${offset}&limit=${limit}`,
            'GET'
        )
            .then(response => {
                console.log('response get chat detail', response);
                resolve(response.data);
            })
            .catch(error => {
                console.log('co loi xay ra', error);
                console.warn(error);
                reject(error);
            });
    });
}
function sendMessage(
    message: string,
    type: 'TEXT' | 'IMAGE' | 'FILE',
    conversation: string
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            message,
            type,
            conversation,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/message', 'POST', data)
            .then(response => {
                console.log('AccountAPI:send message chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}
function editMessage(
    message: string,
    type: 'TEXT' | 'IMAGE' | 'FILE',
    conversation: string,
    id: string
): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            message,
            type,
            conversation,
            id,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/message', 'PUT', data)
            .then(response => {
                console.log('AccountAPI:edit message chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function deleteMessage(conversation: string, id: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            conversation,
            id,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/message', 'DELETE', data)
            .then(response => {
                console.log('AccountAPI:delete message chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}
function markSeenMessage(conversation: string, chatId: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            conversation,
            chatId,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/view-message', 'POST', data)
            .then(response => {
                console.log('AccountAPI:mark view message chat:response', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

function leaveConversation(conversationId: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            conversationId,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/conversation/leave', 'DELETE', data)
            .then(response => {
                console.warn('AccountAPI:leave conversation', response);
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn('AccountAPI:leave conversation', errorMsg);
                reject(errorMsg);
            });
    });
}

function deleteChat(conversationId: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        const data = {
            conversationId,
        };
        Network.authorizedRequest<ResponseAPI>('api/v2/chat/conversation/hide', 'DELETE', data)
            .then(response => {
                resolve(response);
            })
            .catch(errorMsg => {
                console.warn(errorMsg);
                reject(errorMsg);
            });
    });
}

export default {
    createChat,
    getListUserChat,
    getListChat,
    editChatName,
    deleteGroupChat,
    addMemberToChat,
    sendMessage,
    getChatDetail,
    editMessage,
    deleteMessage,
    removeMemberFromChat,
    markSeenMessage,
    leaveConversation,
    deleteChat,
};
