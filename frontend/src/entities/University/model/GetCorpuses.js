import { getCorpuses } from '@shared/api/all/university';

export const GetCorpuses = async (params) => {
   try {
      const response = await getCorpuses(params);
      if (!response.json || !response.json.data) throw new Error();

      let newArr = response.json.data.map((item) => item.building);

      return { data: newArr };
   } catch (e) {
      console.log(e);
   }
};
