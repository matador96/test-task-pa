import { deleteUniversityById } from '@shared/api/all/university';

export const DeleteUniversityById = async (id) => {
   try {
      const response = await deleteUniversityById(id);
      if (!response.json) throw new Error();
      return {};
   } catch (e) {
      console.log(e);
      throw new Error(e);
   }
};
