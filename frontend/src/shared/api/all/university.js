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

export const getUniversitiesWithParams = (params) =>
   get(`${generateQueryParams(`/universities`, params)}`);

export const getCorpuses = (params) =>
   get(`${generateQueryParams(`/corpuses`, params)}`);

export const getUniversityById = (id) => get(`/university/${id}`);

export const deleteUniversityById = (id) => _delete(`/university/${id}`, {}, true);
