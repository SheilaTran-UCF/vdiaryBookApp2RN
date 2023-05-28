import Network from '../Network/Network';
import { ResponseTubeAPI } from '../type';

export default {
    searchHashtag,
    searchLocation,
    uploadTube,
    getListHashtag,
    getDetailPost,
    searchTube,
    likePost,
};

const convertPaginateUrl = ({
    sortBy,
    limit,
    page,
    isAsc,
    txtSearch,
}: {
    sortBy: string;
    limit: number;
    page: number;
    isAsc: boolean;
    txtSearch?: string;
}) => {
    return `limit=${limit}&sortBy=${sortBy}:${isAsc ? 'asc' : 'desc'}&page=${page}${
        !!txtSearch ? '&search=' + txtSearch : ''
    }`;
};

function getListHashtag<T>({
    sortBy,
    limit,
    page,
    isAsc,
    txtSearch,
}: {
    sortBy: string;
    limit: number;
    page: number;
    isAsc: boolean;
    txtSearch?: string;
}): Promise<any> {
    const paddingUrl = convertPaginateUrl({
        sortBy,
        limit,
        page,
        isAsc,
        txtSearch,
    });
    return new Promise((resolve, reject) => {
        const url = `/v1/hashtag?hashtagType=postnews&${paddingUrl}`;
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
function searchHashtag<T>(keyword: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequestTube<ResponseTubeAPI>(
            `/v1/hashtag?hashtagType=postnews&search=${keyword}`,
            'GET'
        )
            .then(response => {
                resolve(response.results);
            })
            .catch(error => {
                console.warn(error);
                reject(error);
            });
    });
}
function searchLocation<T>({
    type,
    search,
    parent,
}: {
    type: string;
    search?: string;
    parent?: string;
}): Promise<any> {
    const url =
        `/v1/location?type=${type}` +
        (search ? `&search=${search}` : '') +
        (parent ? `&parent=${parent}` : '');
    return new Promise((resolve, reject) => {
        Network.authorizedRequestTube<ResponseTubeAPI>(url, 'GET')
            .then(response => {
                resolve(response.results);
            })
            .catch(error => {
                console.warn(error);
                reject(error);
            });
    });
}
function searchTube<T>(keyword: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Network.authorizedRequestTube<ResponseTubeAPI>(
            `/v1/history/conversion/?hashtagType=postnews&search=${keyword}`,
            'GET'
        )
            .then(response => {
                resolve(response.results);
            })
            .catch(error => {
                console.warn(error);
                reject(error);
            });
    });
}
function uploadTube<T>(bodyTube: any): Promise<any> {
    const url = '/v1/history/conversion';
    console.warn('url', url);
    return new Promise((resolve, reject) => {
        Network.authorizedRequestTube<ResponseTubeAPI>(url, 'POST', bodyTube)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.warn(error);
                reject(error);
            });
    });
}

function getDetailPost<T>({ id }: { id: string }): Promise<any> {
    return new Promise((resolve, reject) => {
        const url = `/v1/history/conversion/${id}`;
        Network.authorizedRequestTube<ResponseTubeAPI>(url, 'GET')
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.warn('a', url);
                console.warn(error);
                reject(error);
            });
    });
}

function likePost<T>({ id, isLiked }: { id: string; isLiked: boolean }): Promise<any> {
    return new Promise((resolve, reject) => {
        const url = `/v1/history/conversion/${id}/like`;
        Network.authorizedRequestTube<ResponseTubeAPI>(url, isLiked ? 'DELETE' : 'POST')
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.warn('a', url);
                console.warn(error);
                reject(error);
            });
    });
}
