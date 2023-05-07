export interface IUser {
  id: number;
  email: string;
  auth: number;
  nickname: string;
}

export interface IUserInputDTO {
  email: string;
  nickname: string;
}
