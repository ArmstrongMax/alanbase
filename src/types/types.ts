export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  job?: string;
}

export interface IGetUsersResponse {
  data: Array<IUser>;
  meta: {
    from: number;
    to: number;
    total: number;
  };
}
