import { getSchoolById } from '@shared/api/all/school';

export const GetSchoolById = async (id) => {
   try {
      const response = await getSchoolById(id);
      if (!response.json) throw new Error();
      return { data: response.json.data };
   } catch (e) {
      console.log(e);
      throw new Error(e);
   }
};
