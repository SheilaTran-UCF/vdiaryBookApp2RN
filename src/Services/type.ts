// import { ReactActivity } from '@/Commons';
// import { EMessageDetail } from '@/Services/type';
import { TUserProfile } from '@/Types';

export type NetworkPromiseResponse<T> = Promise<T>;

/**
 * Tube type
 */

export interface IHashtag {
  name: string;
  hashtagType: string;
  updates: Date[];
  weekCounts: number;
  id: string;
}
export interface ILocation {
  name: string;
  type: string;
  location_id: string;
  id: string;
}

export interface IBodyUploadTube {
  conversionType: string;
  content: string;
  attachments: Attachment[];
  publishAt: string;
  location: Location;
  hashtags: string[];
}

export interface Attachment {
  fileId: string;
  mimeType: string;
}

export interface Location {
  province: string;
  district: string;
  ward: string;
}

export type LoginSocialProps = {
  token_type: 'Bearer';
  expires_in: number; //31535999,
  access_token: string;
  refresh_token: string;
};

export type LoginResponseApi = {
  message: string;
  access_token: string;
  // token_type: Bearer,
  // expires_at: 2021-12-12 02:05:25,
  data: EUserProfile;
};

export type ResponseAPI = {
  code: number;
  message: string;
  data: any; //ResponseGET_API
};

export type ResponseTubeAPI = {
  code: number;
  message: string;
  results: any; //ResponseGET_API
};

export class ResponseData<T> {
  code: number;
  message: string;
  data: T;
  constructor(e: ResponseAPI) {
    this.code = e.code;
    this.message = e.message;
    this.data = e.data;
  }
}

export type EUserProfile = {
  avatar: string;
  cover: Array<string>;
  created_at: string;
  email: string;
  first_name: string;
  invite_code: string;
  identifier: boolean;
  is_active: boolean;
  last_name: string;
  login_type: string;
  password: string;
  phone: string;
  status: string;
  updated_at: string;
  __v: number;
  _id: string;
};

export type EUserCensor = {
  content: string;
  created_at: string;
  district: string;
  file: Array<string>;
  province: string;
  status: 'ACTIVED' | 'PENDING' | 'REJECT' | 'FOLLOWING';
  updated_at: string;
  user: string;
  ward: string;
  __v: number;
  _id: string;
};
//FEED
export type ETotalNewFeed = {
  data: Array<ENewFeed>;
  limit: number;
  offset: number;
  total: number;
};
export type ENewFeed = {
  data: EDataNewFeed & {
    share: boolean;
    preview_post: EDataNewFeed;
  };
  disliked_users: Array<any>;
  is_care: boolean;
  is_disliked: boolean;
  is_join: boolean;
  is_liked: boolean;
  is_saved: boolean;
  liked_users: Array<TUserProfile>;
  total_care: number;
  total_comments: number;
  total_dislikes: number;
  total_join: number;
  total_likes: number;
  isPin: boolean;
  cared_user: Array<TUserProfile>;
  user_join_event: Array<TUserProfile>;
};
export type EDataNewFeed = {
  comment_type: string;
  content: string;
  created_at: string;
  documents: Array<any>;
  end_date: number;
  hash_tags: Array<any>;
  images: Array<string>;
  is_active: boolean;
  location: { lat: number; long: number; address: string };
  name: string;
  organization_type: string;
  poll_data: Array<EPollData>;
  poll_name: string;
  preview_link?: EPreviewLink;
  publish_date: number;
  start_date: number;
  tags: Array<TUserProfile>;
  title: string;
  type: string;
  updated_at: string;
  user: TUserProfile;
  videos: Array<any>;
  visible_type: 'PUBLIC' | 'ONLY_ME' | 'FRIEND';
  __v: number;
  _id: string;
  group: EGroupElement;
  total_user_voted: number;
  reaction_activity?: any;
  category?: any[];
};

export type EPreviewLink = {
  'apple-mobile-web-app-title': string;
  'application-name': string;
  author: string;
  availability: string;
  canonical: string;
  copyright: string;
  description: string;
  distribution: string;
  'fb:app_id': string;
  'fb:article_style': string;
  generator: string;
  'google-site-verification': string;
  image: string;
  jsonld: any;
  keywords: string;
  news_keywords: string;
  'og:description': string;
  'og:determiner': string;
  'og:image': string;
  'og:image:height': string;
  'og:image:secure_url': string;
  'og:image:type': string;
  'og:image:width': string;
  'og:locale': string;
  'og:locale:alternate': string;
  'og:site_name': string;
  'og:title': string;
  'og:type': string;
  'og:url': string;
  'op:markup_version': string;
  price: string;
  priceCurrency: string;
  'resource-type': string;
  'revisit-after': string;
  robots: string;
  source: string;
  title: string;
  'twitter:account_id': string;
  'twitter:card': string;
  'twitter:creator': string;
  'twitter:creator:id': string;
  'twitter:image': string;
  'twitter:image:alt': string;
  'twitter:player': string;
  'twitter:player:height': string;
  'twitter:player:stream': string;
  'twitter:player:width': string;
  'twitter:site': string;
  'twitter:site:id': string;
  'twitter:title': string;
  url: string;
};

export type EPollData = {
  content: string;
  created_at: string;
  post: string;
  updated_at: string;
  user_votes: Array<TUserProfile>;
  __v: number;
  _id: string;
};
export type EComment = {
  content: string;
  created_at: string;
  data: string;
  disliked_users: Array<TUserProfile>;
  date: number;
  is_disliked: boolean;
  is_liked: boolean;
  post: EDataNewFeed;
  parent_id: string;
  total_dislikes: number;
  total_likes: number;
  updated_at: string;
  user: TUserProfile;
  __v: number;
  _id: string;
  replies: Array<EReplyComment>;
  media?: mediaComment[];
};

export type mediaComment = {
  _id?: string;
  type?: string;
  file_type?: string;
  image?: string;
};

export type EReplyComment = {
  data: {
    content: string;
    created_at: string;
    date: number;
    parent_id: string;
    post: EDataNewFeed;
    updated_at: string;
    user: TUserProfile;
    __v: number;
    _id: string;
    media?: mediaComment[];
  };
  disliked_users: Array<TUserProfile>;
  is_disliked: boolean;
  is_liked: boolean;
  liked_users: Array<TUserProfile>;
  total_dislikes: number;
  total_likes: number;
};
export type ENewFeedFile = {
  docsId: string;
  type: string;
  name: string;
};

export type EMedia = {
  created_at: string;
  image_path: string;
  is_delete: boolean;
  mime_type: string;
  post_id: string;
  updated_at: string;
  user_id: string;
  __v: number;
  _id: string;
};
// GROUP
export type EJoinedGroup = {
  total_member: number;
  user_group: EGroup;
};
export type ESuggestGroup = {
  data: EGroupElement;
  total_member: number;
};
export type EGroup = {
  created_at: string;
  date: number;
  group: EGroupElement;
  role: string;
  updated_at: string;
  user: string;
  __v: number;
  _id: string;
};
export type EGroupElement = {
  avatar: string;
  cover: string;
  created_at: string;
  creator: TUserProfile;
  description: string;
  is_active: boolean;
  name: string;
  name_slug: string;
  status: string;
  type: 'PUBLIC' | 'PRIVATE' | 'SECRET';
  updated_at: string;
  __v: number;
  _id: string;
};
export type EGroupDetail = {
  data: EGroupElement;
  user_group: {
    created_at: string;
    date: number;
    group: string;
    is_blocked: boolean;
    role: 'ADMIN' | 'MEMBER' | 'MODERATOR' | 'BLOCKED';
    updated_at: string;
    user: {
      _id: string;
      avatar: string;
      cover: string[];
      created_at: Date;
      first_name: string;
      is_active: boolean;
      last_name: string;
      login_type: string;
      status: string;
      updated_at: Date;
    };
    __v: number;
    _id: string;
  }[];
  group_user_request: {
    created_at: string;
    date: number;
    group: symbol;
    status: string;
    updated_at: string;
    user: string;
    __v: number;
    _id: string;
  };
};

export type EGroupMember = {
  is_blocked: boolean;
  date: number;
  _id: string;
  user: TUserProfile;
  group: string;
  created_at: string;
  updated_at: string;
  __v: number;
  role: 'ADMIN' | 'MEMBER' | 'MODERATOR' | 'BLOCKED';
};

export type EGroupMemberList = {
  data: Array<EGroupMember>;
  total: number;
  limit: number;
  offset: number;
};

export type EProfileOverview = {
  data: {
    bio: string;
    birthday: number;
    company: string;
    country: string;
    created_at: string;
    education: Array<{
      school: string;
      degree: string;
      field_of_study: string;
      from: number;
      to: number;
      current: boolean;
      description: string;
    }>;
    experience: Array<{
      title: string;
      company: string;
      from: number;
      to: number;
      current: boolean;
      description: string;
    }>;
    gender: string;
    hobbies: Array<any>;
    location: {
      province: string;
      districts: string;
      wards: string;
    };
    occupation: string;
    phone: string;
    skills: Array<any>;
    social: {
      youtube: string;
      twitter: string;
      instagram: string;
      facebook: string;
      linkedin: string;
    };
    updated_at: string;
    user: TUserProfile;
    wallet: string;
    website: string;
    __v: number;
    _id: string;
  };
  total_friends: 0;
  total_images: 20;
  total_posts: 19;
  is_follow: boolean;
  is_friend: boolean;
  is_receiver_friend_request: boolean;
  is_send_friend_request: boolean;
};
export type EJoinRequestGroup = {
  created_at: string;
  date: number;
  group: string;
  status: string;
  updated_at: string;
  user: TUserProfile;
  role: 'ADMIN' | 'MEMBER' | 'MODERATOR' | 'BLOCKED';
  _id: string;
};
//relationship

export type EReceiveRequestFriend = {
  created_at: string;
  receiver: TUserProfile;
  sender: TUserProfile;
  status: string;
  updated_at: string;
  __v: number;
  _id: string;
};
export type EFriend = {
  count_friend: number;
  created_at: string;
  full_name_1: string;
  full_name_2: string;
  id: string;
  relationship: string;
  updated_at: string;
  user_id: string;
  user_target: TUserProfile;
  user_target_id: string;
  __v: number;
  _id: string;
};
export type EMessage = {
  avatar: Array<string>;
  cominicated: true;
  countNotRead: number;
  create_time_last_message: string;
  created_at: string;
  last_message: string;
  members: Array<TUserProfile>;
  name: string;
  type: 'INDIVIDUAL' | 'GROUP';
  type_last_message: 'TEXT' | 'IMAGE' | 'FILE';
  updated_at: string;
  user_created: string;
  __v: number;
  _id: string;
};

export type EChatDetail = {
  avatar: Array<string>;
  conversation: Array<EMessageDetail>;
  members: Array<TUserProfile>;
  name: string;
};
export type EMessageDetail = {
  created_at: string;
  group_chat: string;
  is_read: boolean;
  is_unsend: boolean;
  mess_waitting: boolean;
  message: string;
  type: 'TEXT' | 'IMAGE' | 'FILE';
  updated_at: string;
  user: TUserProfile;
  __v: number;
  _id: string;
};

export type ENotify = {
  created_at: string;
  date: number;
  message: {
    body: string;
    created_at: string;
    date: number;
    group: string;
    is_active: boolean;
    post: string;
    push_type: string;
    timestamp: number;
    title: string;
    updated_at: string;
    __v: number;
    _id: string;
  };
  push_type: string;
  status: 'NEW' | 'SEEN' | 'UNSEEN';
  title: string;
  to_all: boolean;
  type: string;
  updated_at: string;
  user_receiver: TUserProfile;
  user_sender: TUserProfile;
  __v: number;
  _id: string;
};

export type ELocation = {
  _id: string;
  id: string;
  code: string;
  name: string;
  districts: Array<{
    id: string;
    name: string;
    wards: Array<{
      id: string;
      name: string;
      prefix: string;
    }>;
  }>;
};

export type EProvince = {
  _id: string;
  province_id: string;
  name: string;
  type: string;
};

export type EGift = {
  expired: number;
  _id: string;
  user: string;
  title: symbol;
  content: string;
  file: string;
  link: string;
  province: string;
  district: string;
  ward: string;
  publish_date: number;
  status: string;
  created_at: true;
  updated_at: string;
  __v: number;
  admin_handle: string;
};

export type ESurveyorNotify = {
  content: string;
  created_at: string;
  image: string;
  title: string;
  updated_at: string;
  user: TUserProfile;
  __v: number;
  _id: string;
};

export type EGiftDetail = {
  content: string;
  created_at: string;
  expired: number;
  file: string;
  link: string;
  province: string;
  publish_date: number;
  title: string;
  updated_at: string;
  user: string;
  __v: number;
  _id: string;
};

export type EInvite = {
  total: number;
  user_send: Array<TUserProfile>;
};
export type EInvited = {
  created_at: string;
  email: string;
  status: false;
  token_verify: string;
  updated_at: string;
  user_receiver: TUserProfile;
  user_send: string;
  __v: number;
  _id: string;
};

export type EPatron = {
  created_at: string;
  file: string;
  name: string;
  order: number;
  status: boolean;
  updated_at: string;
  user: string;
  __v: number;
  _id: string;
};

export type EIdentify = {
  _id: string;
  user: string;
  full_name: string;
  nationality: string;
  papers: string;
  cccd: number;
  cccd_font: string;
  cccd_back: string;
  created_at: string;
  updated_at: string;
  __v: number;
};

export type EReport = {
  content: Array<string>;
  _id: string;
  user_id: TUserProfile;
  post_id: ENewFeed;
  created_at: string;
  updated_at: string;
  __v: number;
};

export type EHobbyCategory = {
  api_enum: string;
  childs: Array<any>;
  createdAt: string;
  fb_id: string;
  name: string;
  parent: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type UsersSearch = {
  avatar: string;
  count_mutual_friend: number;
  cover: string[];
  created_at: string;
  email: string;
  first_name: string;
  id: string;
  invite_code: string;
  is_active: boolean;
  last_name: string;
  login_type: string;
  password: string;
  phone: string;
  status: string;
  updated_at: string;
};
