import { deleteHighSchoolById } from '@shared/api/all/highschool';

export const DeleteHighSchoolById = async (id) => {
   try {
      const response = await deleteHighSchoolById(id);
      if (!response.json) throw new Error();
      return {};
   } catch (e) {
      console.log(e);
      throw new Error(e);
   }
};
