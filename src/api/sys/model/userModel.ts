/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoByUserIdModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 介绍
  desc?: string;
}

export interface User {
  email: string;
  realName?: string;
  desc?: string;
  roles: Array<UserRole>;
  token: string;
  id: string;
}

export interface UserInCreate {
  email: string;
  password: string;
  realName: string;
  desc?: string;
}

export interface UserInLogin {
  email: string;
  password: string;
}

export interface UserInResponse {
  user: User;
}

export interface UserInUpdate {
  email?: string;
  password?: string;
  realName?: string;
  desc?: string;
}

export interface UserRole {
  roleName: string;
  value: string;
}

export interface ManyUser {
  email: string;
  realName?: string;
  desc?: string;
  roles: Array<UserRole>;
  id: string;
}

export interface ManyUserInResponse {
  user: Array<ManyUser>;
}
