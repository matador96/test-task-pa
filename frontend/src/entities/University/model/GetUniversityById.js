import { getUniversityById } from '@shared/api/all/university';

export const GetUniversityById = async (id) => {
   try {
      const response = await getUniversityById(id);
      if (!response.json) throw new Error();
      return { data: response.json.data };
   } catch (e) {
      console.log(e);
      throw new Error(e);
   }
};
