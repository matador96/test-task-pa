import { deleteSchoolById } from '@shared/api/all/school';

export const DeleteSchoolById = async (id) => {
   try {
      const response = await deleteSchoolById(id);
      if (!response.json) throw new Error();
      return {};
   } catch (e) {
      console.log(e);
      throw new Error(e);
   }
};
