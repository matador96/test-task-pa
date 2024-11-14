import {
   get,
   post,
   put,
   generateQueryParams,
   _delete,
   getAuthHeaders,
   requestResult,
   API_URL
} from '../fetch.js';

export const loginUser = (fields) =>
   post(
      '/user/login',
      {
         ...fields
      },
      true
   );

export const logoutUser = () => get(`/user/logout`);
export const getUser = () => get(`/user`);

export const getUsers = (params) => get(generateQueryParams(`/users`, params));

export const createUser = (fields) =>
   post(
      '/user',
      {
         ...fields
      },
      true
   );

export const deleteUserById = (id) => _delete(`/user/${id}`, {}, true);

export const updateUser = (fields, id) =>
   put(
      `/user/${id}`,
      {
         ...fields
      },
      true
   );
