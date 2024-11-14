import { getSchoolsWithParams } from '@shared/api/all/school';

export const GetSchools = async (params) => {
   try {
      const response = await getSchoolsWithParams(params);
      if (!response.json) throw new Error();
      return { data: response.json.data, count: response.json.count };
   } catch (e) {
      console.log(e);
   }
};
