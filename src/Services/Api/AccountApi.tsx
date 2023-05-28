// import { GlobalUIManager } from '@/GlobalUI';
import Network from '../Network/Network';
import {
  LoginResponseApi,
  LoginSocialProps,
  mediaComment,
  ResponseAPI,
  ResponseData,
} from '../type';

// function login(
//   email: string,
//   password: string,
// ): Promise<any> {
//   return new Promise((resolve: any, reject: any) => {
//     const data = {
//       email,
//       password,
//     };
//     console.log(data)
//     Network.unAuthorizedRequest<LoginResponseApi>(
//       `api/v1/auth`, "POST", data)
//       .then((response) => {
//         console.log("AccountAPI:login:response", response)
//         resolve(response);
//       })
//       .catch(errorMsg => {
//         console.warn(errorMsg);
//         reject(errorMsg);
//       });
//   });
// }

function login(account: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const data = {
      account,
      password,
    };
    Network.unAuthorizedRequest<LoginResponseApi>('api/v2/auth', 'POST', data)
      .then(response => {
        console.log('AccountAPI:login:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function loginSocial(
  token: string,
  type: 'facebook' | 'google' | 'apple',
): Promise<ResponseAPI> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      token,
    };
    console.log(data);
    Network.unAuthorizedRequest<ResponseAPI>(
      `api/v2/auth/${type}`,
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:loginSocial:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function register<T>(
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  phone: string,
  ref: string,
): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      first_name,
      last_name,
      email,
      password,
      phone,
      ref,
    };
    console.log('dataaaaaa', data);
    Network.unAuthorizedRequest<ResponseAPI>('api/v2/users', 'POST', data)
      .then((response: any) => {
        console.log('response register', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}

function updateFCMToken<T>(
  fcm_token: string,
  access_token: string,
): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      fcm_token,
    };
    Network.unAuthorizedRequest<ResponseAPI>(
      'api/account/update-device-token',
      'PUT',
      data,
      {
        Authorization: `Bearer ${access_token}`,
      },
    )
      .then((response: any) => {
        console.log('updateFCMToken:response', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn('updateFCMToken:err', error);
        reject(error);
      });
  });
}

function getUserInfo<T>(): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>('api/account/profile')
      .then(response => {
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}

function getUserInfoWhenLoginSocical<T>(
  token: string,
): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    Network.unAuthorizedRequest<ResponseAPI>(
      'api/account/profile',
      'GET',
      undefined,
      {
        Authorization: `Bearer ${token}`,
      },
    )
      .then(response => {
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}
function getRuleAndPolicy<T>(): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    Network.unAuthorizedRequest<ResponseAPI>('api/v2/policy/actived', 'GET')
      .then(response => {
        console.log('respone get rule and policy');
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}
function updateMyInfo<T>(
  company: string,
  website: string,
  country: string,
  occupation: string,
  location: {
    province: string;
    districts: string;
    wards: string;
  },
  skills: string,
  hobbies: string,
  bio: string,
  experience: Array<{
    title: string;
    company: string;
    from: number; //(format YYYYMMDD)
    to: number; //( format YYYYMMDD)
    current: boolean;
    description: string;
  }>,
  education: Array<{
    school: string;
    degree: string;
    field_of_study: string;
    from: number; //(format YYYYMMDD),
    to: number; //(format YYYYMMDD),
    current: boolean;
    description: string;
  }>,
  social: {
    youtube: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
  },
  birthday: number,
  wallet?: string,
): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      company,
      website,
      country,
      occupation,
      location,
      skills,
      hobbies,
      bio,
      experience,
      education,
      social,
      birthday,
      wallet,
    };
    Network.authorizedRequest<ResponseAPI>(
      '/api/v2/profile/update',
      'PUT',
      data,
    )
      .then((response: any) => {
        console.log('response update introduction', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}
function updateMyCover<T>(url: Array<string>): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      url,
    };
    Network.authorizedRequest<ResponseAPI>(
      '/api/v2/users/updateCoverImg',
      'PUT',
      data,
    )
      .then((response: any) => {
        console.log('response update cover', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}

function forgotPass<T>(email: string): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      email,
    };
    Network.authorizedRequest<ResponseAPI>(
      '/api/v2/users/forgot-password',
      'POST',
      data,
    )
      .then((response: any) => {
        console.log('response forgot pass', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}
function verifyMail<T>(otp: string): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      otp,
    };
    Network.authorizedRequest<ResponseAPI>(
      '/api/v2/users/verify-code',
      'POST',
      data,
    )
      .then((response: any) => {
        console.log('response verify by mail', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}

function resetPass<T>(
  otp: string,
  pass: string,
  phone: string,
  type: string,
): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      otp,
      pass,
      phone,
      type,
    };
    Network.authorizedRequest<ResponseAPI>(
      '/api/v2/users/confirm-password',
      'POST',
      data,
    )
      .then((response: any) => {
        console.log('response verify by mail', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}
function changePass<T>(
  otp: string,
  old_pass: string,
  new_pass: string,
  phone: string,
  type: string,
): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      otp,
      old_pass,
      new_pass,
      phone,
      type,
    };
    Network.authorizedRequest<ResponseAPI>(
      '/api/v2/users/change-password',
      'PUT',
      data,
    )
      .then((response: any) => {
        console.log('response change pass', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}

function inviteUser<T>(email: string, type: number): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      email,
      type,
    };
    Network.authorizedRequest<ResponseAPI>(
      '/api/v2/users/inviteRequest',
      'POST',
      data,
    )
      .then((response: any) => {
        console.log('response invite user', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}

function upImage<T>(name: string, code?: string): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      name: name,
      type: 1,
      code: code,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v1/images/uploadImages',
      'POST',
      data,
    )
      .then((response: any) => {
        console.log('response upload image', response);
        resolve(response);
      })
      .catch(error => {
        console.log('error uploadImage');
        console.warn(error);
        reject(error);
      });
  });
}

//POSTTTTTTTTTTTTTTTTTT --------------------------------------------------------------------------
function getListPostUser<T>(
  user_target_id: string | undefined,
  offset: number,
  limit: number,
  type?: 'NORMAL' | 'EVENT' | 'POLL',
  category?: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/post/all-post-of-user?offset=${offset}&limit=${limit}&${
        !!type ? `type=${type}` : ''
      }&${!!category ? `category=${category}` : ''}&${
        !!user_target_id ? `user_target_id=${user_target_id}` : ''
      }`,
      'GET',
    )
      .then(response => {
        console.log('response get list post user', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getListPostGroup<T>(
  group_id: string,
  offset: number,
  limit: number,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/post/all-post-of-group?group_id=${group_id}&offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        // console.log('response get list post group', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        reject(error);
      });
  });
}

function getListPostAll<T>(
  offset: number,
  limit: number,
  type?: 'NORMAL' | 'EVENT' | 'POLL',
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/post/all-post?offset=${offset}&limit=${limit}${
        !!type ? `&type=${type}` : ''
      }`,
      'GET',
    )
      .then(response => {
        // console.log('response get list post all', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        reject(error);
      });
  });
}

function getListSearchPost<T>(
  offset: number,
  limit: number,
  keyword: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/post/search-post?offset=${offset}&limit=${limit}&keyword=${keyword}`,
      'GET',
    )
      .then(response => {
        console.log('response get list search post', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function createPost(
  title: string,
  content: string,
  name: string,
  images: Array<{ url: string }>,
  videos: Array<{ url: string }>,
  type: 'NORMAL' | 'POLL' | 'EVENT',
  start_date: number,
  end_date: number,
  organization_type: 'USER' | 'GROUP',
  group: string,
  tags: Array<string>,
  polls: Array<{ content: string; user_votes: Array<string> }>,
  poll_name: string,
  location: {
    lat: number;
    long: number;
    address: string;
  },
  visible_type: 'PUBLIC' | 'ONLY_ME' | 'FRIEND',
  publish_date: number,
  share?: boolean,
  preview_post?: string | null,
  category?: Array<string>,
  reaction_activity?: string,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      title,
      content,
      name,
      images,
      videos,
      type,
      start_date,
      end_date,
      organization_type,
      group,
      tags,
      polls,
      poll_name,
      location,
      visible_type,
      publish_date,
      share,
      preview_post,
      category,
      reaction_activity,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/create-post',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create post:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function sharePost(
  content: string,
  visible_type: 'PUBLIC' | 'ONLY_ME' | 'FRIEND',
  organization_type: 'USER' | 'GROUP',
  preview_post: string,
  share: boolean,
  group: string,
  type: 'NORMAL' | 'POLL' | 'EVENT',
  name: string,
  status: number,
  publish_date: string,
  lat: number,
  long: number,
  address: string,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      content,
      visible_type,
      organization_type,
      preview_post,
      share,
      group,
      type,
      name,
      status,
      publish_date,
      lat,
      long,
      address,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/create-post',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create post:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function editPost(
  id: string,
  title: string,
  content: string,
  name: string,
  images: Array<{ url: string }>,
  videos: Array<{ url: string }>,
  type: 'NORMAL' | 'POLL' | 'EVENT',
  start_date: number,
  end_date: number,
  organization_type: 'USER' | 'GROUP',
  group: string,
  tags: Array<string>,
  polls: Array<{ content: string; user_votes: Array<string> }>,
  poll_name: string,
  location: {
    lat: number;
    long: number;
    address: string;
  },
  visible_type: 'PUBLIC' | 'ONLY_ME' | 'FRIEND',
  reaction_activity?: string,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
      title,
      content,
      name,
      images,
      videos,
      type,
      start_date,
      end_date,
      organization_type,
      group,
      tags,
      polls,
      poll_name,
      location,
      visible_type,
      reaction_activity,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/update-post',
      'PUT',
      data,
    )
      .then(response => {
        console.log('AccountAPI:edit post:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function createComment(
  post_id: string,
  parent_id: string,
  content: string,
  media: mediaComment[] = [],
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      post_id,
      parent_id,
      content,
      media,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/comment/create',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create comment:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function getPostHobbies(offset: number, limit: number): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/post/categories?offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        console.log('AccountAPI:get post hobbies:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function getPostDetail(id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    Network.authorizedRequest<ResponseAPI>(`api/v2/post/info?id=${id}`, 'GET')
      .then(response => {
        console.log('AccountAPI:get post detail:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function getComment(
  post_id: string,
  limit: number,
  offset: number,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/post/comment/list?post_id=${post_id}&limit=${limit}&offset=${offset}`,
      'GET',
    )
      .then(response => {
        console.log('AccountAPI:get list comment:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function createReaction(
  id: string,
  reaction: 'LIKE' | 'DISLIKE',
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
      reaction,
    };
    Network.authorizedRequest<ResponseAPI>('api/v2/post/reaction', 'POST', data)
      .then(response => {
        console.log('AccountAPI:create reaction:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function createReactionComment(
  id: string,
  reaction: 'LIKE' | 'DISLIKE',
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
      reaction,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/comment-reaction',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create reaction comment:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function votePoll(
  poll_id: string,
  post_id: string,
  user_votes: Array<string>,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      poll_id,
      post_id,
      user_votes,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/vote/update',
      'PUT',
      data,
    )
      .then(response => {
        console.log('AccountAPI:vote poll:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function addPollChoice(
  post_id: string,
  polls: {
    content: string;
    user_votes: [];
  },
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      post_id,
      polls,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/poll/add-option',
      'PUT',
      data,
    )
      .then(response => {
        console.log('AccountAPI:add choice to poll:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
function savePost(
  type: 'SAVED',
  action_type: string,
  post_id: string,
  group_id: string,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      type,
      action_type,
      post_id,
      group_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/pin-post/create',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create save post:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function hidePost<T>(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(`api/v2/post/hide/${id}`, 'DELETE')
      .then(response => {
        console.log('response hidepost', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function deletePost<T>(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(`api/v2/post/${id}`, 'DELETE')
      .then(response => {
        console.log('response deletepost', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getReactionActivities<T>(): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>('/api/v2/reaction-activity', 'GET')
      .then(response => {
        console.log('response getListReactionPost', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
//PIN POST --------------------------------------------------------------------------

function getPinPostInfo<T>(
  id: string,
  type: 'PIN' | 'SAVED',
  action_type: 'USER' | 'GROUP',
  group_id: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/pin-post/info?id=${id}&type=${type}&action_type=${action_type}&group_id=${group_id}`,
      'GET',
    )
      .then(response => {
        console.log('response get pin post info', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function getListPinPost<T>(
  type: 'PIN' | 'SAVED',
  action_type: 'USER' | 'GROUP',
  group_id: string,
  offset: number,
  limit: number,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/pin-post/list?offset=${offset}&limit=${limit}&type=${type}&action_type=${action_type}&${
        !!group_id ? `group_id=${group_id}` : ''
      }`,
      'GET',
    )
      .then(response => {
        console.log('response get list pin post', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function pinPost(
  type: 'PIN',
  action_type: string,
  post_id: string,
  group_id: string,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      type,
      action_type,
      post_id,
      group_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/pin-post/create',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create pin post:response', response);
        resolve(response.data);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
        // GlobalUIManager.view.showErrorFlashMsg({
        //   content: errorMsg,
        // });
      });
  });
}
function unPinPost<T>(
  id: string,
  action_type: string,
  group_id: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/pin-post/delete?id=${id}&action_type=${action_type}${
        !!group_id ? `&group_id=${group_id}` : ''
      }`,
      'DELETE',
    )
      .then(response => {
        console.log('response unpin post', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

//Event--------------------------------------------------------------------------

function joinEvent(post_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      post_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/event/join-event',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:join event:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function leaveEvent(post_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      post_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/event/un-join-event',
      'DELETE',
      data,
    )
      .then(response => {
        console.log('AccountAPI:leave event:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
function careEvent(post_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      post_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/event/care-event',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:care event:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function unCareEvent(post_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      post_id,
    };
    Network.authorizedRequest<LoginResponseApi>(
      'api/v2/event/un-care-event',
      'DELETE',
      data,
    )
      .then(response => {
        console.log('AccountAPI:uncare event:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
//GROUPPPPPPPPPPPPPPPPPP --------------------------------------------------------------------------
function createGroup(
  name: string,
  type: 'PUBLIC' | 'PRIVATE' | 'SECRET',
  cover: string,
  description: string,
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      name,
      type,
      cover,
      description,
    };
    Network.authorizedRequest<LoginResponseApi>(
      'api/v2/groups/create',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create group:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
function updateGroup(
  name: string,
  avatar: string,
  cover: string,
  description: string,
  group_id: string,
  type: 'PUBLIC' | 'PRIVATE' | 'SECRET',
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      name,
      avatar,
      cover,
      description,
      group_id,
      type,
    };
    Network.authorizedRequest<LoginResponseApi>(
      'api/v2/groups/update',
      'PUT',
      data,
    )
      .then(response => {
        console.log('AccountAPI:update group:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function getListJoinedGroup<T>(
  user_target_id: string,
  offset: number,
  limit: number,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/groups/list-group-user-joined?user_target_id=${user_target_id}&offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        console.log('response get list joined group', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getListSuggestGroup<T>(offset: number, limit: number): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/groups/list-group-suggest?offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        console.log('response get list suggest group', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getGroupDetail<T>(group_id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/groups/info?group_id=${group_id}`,
      'GET',
    )
      .then(response => {
        console.log('response get group detail', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getListGroupMember<T>(
  group_id: string,
  limit: number,
  offset: number,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/groups/list-member?group_id=${group_id}&limit=${limit}&offset=${offset}`,
      'GET',
    )
      .then(response => {
        console.log('response get group member', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getListJoinRequestMember<T>(
  group_id: string,
  limit: number,
  offset: number,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/groups/list-user-join-request?group_id=${group_id}&limit=${limit}&offset=${offset}`,
      'GET',
    )
      .then(response => {
        console.log('response get list join request group', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function replyJoinRequestGroup(
  id: string,
  status: 'APPROVE' | 'REJECTED',
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
      status,
    };
    Network.authorizedRequest<LoginResponseApi>(
      'api/v2/groups/action-join-request',
      'PUT',
      data,
    )
      .then(response => {
        console.log('AccountAPI:reply join group request:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
function sendJoinRequestGroup(group_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      group_id,
    };
    Network.authorizedRequest<LoginResponseApi>(
      'api/v2/groups/user-join-group',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:create join group request:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function deleteMemberGroup(group_id: string, member_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    Network.authorizedRequest<LoginResponseApi>(
      `api/v2/groups/members/${group_id}/${member_id}`,
      'DELETE',
    )
      .then(response => {
        console.log('AccountAPI:delete member group:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.log(errorMsg);
        reject(errorMsg);
      });
  });
}

function inviteToGroup(group_id: string, user_target_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      group_id,
      user_target_id,
    };
    Network.authorizedRequest<LoginResponseApi>(
      'api/v2/groups/invite-user',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:invite to group request:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
// relationship --------------------------------------------------------------------------
function getListSuggestFriend<T>(): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship/list-suggest-friends',
      'GET',
    )
      .then(response => {
        console.log('response get list suggest Friend', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function getListRequestFriend<T>(offset: number, limit: number): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/user-relationship-request/list?offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        console.log('response get list request Friend', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getListFriend<T>(
  user_id: string,
  relationship: 'FRIEND' | 'BLOCK' | 'FOLLOWER' | 'FOLLOWING',
  offset: number,
  limit: number,
  search: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/user-relationship/list?offset=${offset}&limit=${limit}&user_id=${user_id}&relationship=${relationship}&search=${search}`,
      'GET',
    )
      .then(response => {
        console.log('response get list Friend', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function sendRequestFriend(user_target_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      user_target_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship-request/add-friend-request',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:send request friend:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function cancelSendRequestFriend(receiver: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      receiver,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship-request/cancel-request',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:send request friend:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function acceptRequestFriend(id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship-request/accept-request',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:accept request friend:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function rejectRequestFriend(id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship-request/reject-request',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:reject request friend:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function followUser(user_target_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      user_target_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship/follow-user',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:follow user:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function unFollowUser(user_target_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      user_target_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship/unfollow',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:unfollow user:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
function unFriendUser(user_target_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      user_target_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship/unfriend',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:unfriend user:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
function blockUser(user_target_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      user_target_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/user-relationship/block-user',
      'POST',
      data,
    )
      .then(response => {
        console.log('AccountAPI:block user:response', response);
        resolve(response);
      })
      .catch(errorMsg => {
        console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}
// ACCOUNTTTTTTTTTTTTTTTTTTTTTT --------------------------------------------------------------------------
function getMyProfile<T>(): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>('api/v2/profile/me', 'GET')
      .then(response => {
        console.log('response get my profile', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function getUserProfile<T>(user_target_id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/profile/info?user_target_id=${user_target_id}`,
      'GET',
    )
      .then(response => {
        console.log('response get user profile', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function updateProfile<T>(
  first_name: string,
  last_name: string,
  email: string,
  avatar: string,
  cover: Array<string>,
  phone: string,
  status: 'ACTIVE' | 'INACTIVE',
  is_active: boolean,
): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const data = {
      first_name,
      last_name,
      email,
      avatar,
      cover,
      phone,
      status,
      is_active,
    };
    Network.authorizedRequest<ResponseAPI>('api/v2/users/update', 'PUT', data)
      .then((response: any) => {
        console.log('response updat profile', response);
        resolve(new ResponseData<T>(response));
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}

function getListUserMedia<T>(
  group_id: string,
  user_id: string,
  limit: number,
  offset: number,
  type: 'IMAGE' | 'VIDEO',
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/media-file/list?group_id=${group_id}&user_id=${user_id}&limit=${limit}&offset=${offset}&type=${type}`,
      'GET',
    )
      .then(response => {
        console.log('response get list user media', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

// location--------------------------------------------------------------------------------------------
function getListLocation<T>(): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>('api/v2/location', 'GET')
      .then(response => {
        console.log('response get list location', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getGift<T>(limit: number, offset: number): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `/api/v2/gift/user?offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        console.log('response get list gift', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
// Patron------------------------------------------------------------------
function getPatronList<T>(): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>('/api/v2/companion', 'GET')
      .then(response => {
        console.log('response get patron list', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
// invite---------------------------------------------------------------------
function getTopInvite<T>(limit: number, offset: number): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `/api/v2/profile/top-invite?offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        console.log('response get top invite list', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}
function getInviteList<T>(limit: number, offset: number): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `/api/v2/profile/list-invite?offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        console.log('response get invite list', response);
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        console.warn(error);
        reject(error);
      });
  });
}

function getListEventGroup<T>(
  group_id: string,
  type: string,
  offset: number,
  limit: number,
): Promise<any> {
  return new Promise((resolve, reject) => {
    Network.authorizedRequest<ResponseAPI>(
      `api/v2/post/all-post-of-group?group_id=${group_id}&type=${type}&offset=${offset}&limit=${limit}`,
      'GET',
    )
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log('co loi xay ra', error);
        reject(error);
      });
  });
}

function editComment(
  id: string,
  post_id: string,
  content: string,
  media?: mediaComment[],
): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
      post_id,
      content,
      media,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/comment/update',
      'PUT',
      data,
    )
      .then(response => {
        resolve(response);
      })
      .catch(errorMsg => {
        // console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

function deleteCommemt(id: string, post_id: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const data = {
      id,
      post_id,
    };
    Network.authorizedRequest<ResponseAPI>(
      'api/v2/post/comment/delete',
      'DELETE',
      data,
    )
      .then(response => {
        resolve(response);
      })
      .catch(errorMsg => {
        // console.warn(errorMsg);
        reject(errorMsg);
      });
  });
}

export default {
  login,
  loginSocial,
  register,
  getUserInfo,
  getUserInfoWhenLoginSocical,
  updateMyInfo,
  inviteUser,
  updateMyCover,

  forgotPass,
  verifyMail,
  resetPass,
  changePass,

  updateFCMToken,
  createPost,
  editPost,
  getListSearchPost,
  savePost,
  votePoll,
  addPollChoice,
  deletePost,
  createReaction,
  createReactionComment,
  upImage,
  getListPostAll,
  getListPostUser,
  getListPostGroup,
  createComment,
  getComment,
  getPostDetail,
  pinPost,
  unPinPost,
  getPinPostInfo,
  getListPinPost,
  getPostHobbies,
  getReactionActivities,
  editComment,
  deleteCommemt,

  joinEvent,
  leaveEvent,
  careEvent,
  unCareEvent,

  followUser,
  unFollowUser,

  getMyProfile,
  updateProfile,
  getUserProfile,
  getListUserMedia,

  createGroup,
  replyJoinRequestGroup,
  deleteMemberGroup,
  updateGroup,
  getListJoinedGroup,
  getListSuggestGroup,
  getGroupDetail,
  getListGroupMember,
  getListJoinRequestMember,
  sendJoinRequestGroup,
  inviteToGroup,

  getListSuggestFriend,
  getListRequestFriend,
  getListFriend,
  sendRequestFriend,
  acceptRequestFriend,
  rejectRequestFriend,
  cancelSendRequestFriend,
  unFriendUser,
  blockUser,

  getListLocation,

  getRuleAndPolicy,

  getGift,

  getPatronList,

  getTopInvite,
  getInviteList,
  hidePost,
  getListEventGroup,
};
