import { getHighSchoolById } from '@shared/api/all/highschool';

export const GetHighSchoolById = async (id) => {
   try {
      const response = await getHighSchoolById(id);
      if (!response.json) throw new Error();
      return { data: response.json.data };
   } catch (e) {
      console.log(e);
      throw new Error(e);
   }
};
