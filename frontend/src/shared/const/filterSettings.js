const { GetCorpuses } = require('@entities/University/model/GetCorpuses');

const filterListSchools = [
   {
      title: 'ID',
      type: 'integer',
      index: 'id',
      placeholder: 'Введите ID'
   },
   {
      title: 'Название',
      type: 'string',
      index: 'name',
      placeholder: 'Введите название'
   },
   {
      title: 'Номер',
      type: 'integer',
      index: 'number',
      placeholder: 'Введите номер'
   },
   {
      title: 'Регион',
      type: 'string',
      index: 'region',
      placeholder: 'Введите регион'
   }
];

const filterListHighSchools = [
   {
      title: 'ID',
      type: 'integer',
      index: 'id',
      placeholder: 'Введите ID'
   },
   {
      title: 'Название',
      type: 'string',
      index: 'name',
      placeholder: 'Введите название'
   },
   {
      title: 'Специальность',
      type: 'string',
      index: 'specialty',
      placeholder: 'Введите специальность'
   },
   {
      title: 'Регион',
      type: 'string',
      index: 'region',
      placeholder: 'Введите регион'
   }
];

const filterListUniversities = [
   {
      title: 'ID',
      type: 'integer',
      index: 'id',
      placeholder: 'Введите ID'
   },
   {
      title: 'Название',
      type: 'string',
      index: 'name',
      placeholder: 'Введите название'
   },
   {
      title: 'Год основания',
      type: 'yearPicker',
      index: 'foundation_year',
      placeholder: 'Введите год'
   },
   {
      title: 'Корпус',
      type: 'selectApi',
      fetchApi: GetCorpuses,
      index: 'building',
      placeholder: 'Введите корпус'
   }
];

module.exports = {
   filterListSchools,
   filterListHighSchools,
   filterListUniversities
};
