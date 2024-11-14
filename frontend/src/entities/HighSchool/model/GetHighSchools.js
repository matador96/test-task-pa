import { getHighSchoolsWithParams } from '@shared/api/all/highschool';

export const GetHighSchools = async (params) => {
   try {
      const response = await getHighSchoolsWithParams(params);
      if (!response.json) throw new Error();
      return { data: response.json.data, count: response.json.count };
   } catch (e) {
      console.log(e);
   }
};
