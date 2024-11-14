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

export const getSchoolsWithParams = (params, whereQuery) =>
   get(
      `${generateQueryParams(`/schools`, params)}`
      // ${
      //    whereQuery ? `&whereQuery=${JSON.stringify(whereQuery)}` : ''
      // }`
   );

export const getSchoolById = (id) => get(`/school/${id}`);

export const deleteSchoolById = (id) => _delete(`/school/${id}`, {}, true);
