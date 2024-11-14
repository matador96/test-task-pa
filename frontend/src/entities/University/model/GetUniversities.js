import { getUniversitiesWithParams } from '@shared/api/all/university';

export const GetUniversities = async (params) => {
   try {
      const response = await getUniversitiesWithParams(params);
      if (!response.json) throw new Error();
      return { data: response.json.data, count: response.json.count };
   } catch (e) {
      console.log(e);
   }
};
