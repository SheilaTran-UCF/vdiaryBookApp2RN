export type TGroup = {
  id: number;
  name: string;
  is_active: boolean;
  count_member: number;
  note: string;
  avatar: string;
};

export type TInfoGroup = {
  id: number;
  name: string;
  count_member: number;
  status: number;
  create_user: string;
  avatar: string;
  lst_avt_member: Array<string>;
};

export type TSourcePostGroup = {
  id: number;
  src: string;
};

export type TSourceLikeGroup = {
  id: number;
  src: string;
  name: string;
};

export type TUserPostGroup = {
  user_post_name: string;
  user_avt: string;
  user_id: number;
};

export type TPostGroup = {
  id: number;
  user_post: TUserPostGroup;
  feeling: string;
  active: string;
  public: number;
  address: string;
  status: string;
  lst_source: Array<TSourcePostGroup>;
  count_like: number;
  count_comment: number;
  count_share: number;
  lst_avt_like: Array<TSourceLikeGroup>;
};
