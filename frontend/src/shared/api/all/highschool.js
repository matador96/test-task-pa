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

export const getHighSchoolsWithParams = (params, whereQuery) =>
   get(`${generateQueryParams(`/highschools`, params)}`);

export const getHighSchoolById = (id) => get(`/highschool/${id}`);

export const deleteHighSchoolById = (id) => _delete(`/highschool/${id}`, {}, true);
