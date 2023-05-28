export type TUserProfile = {
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

export type TUserToken = {
  access_token: string;
  user: TUserProfile;
  // expires_in: number
  // refresh_token: string
  // token_type: string //"Bearer"
};
