const schoolColumns = [
   {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
   },
   {
      title: 'Название',
      key: 'name',
      dataIndex: 'name'
   },
   {
      title: 'Номер',
      key: 'number',
      dataIndex: 'number'
   },
   {
      title: 'Регион',
      key: 'region',
      dataIndex: 'region'
   }
];

const highSchoolColumns = [
   {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
   },
   {
      title: 'Название',
      key: 'name',
      dataIndex: 'name'
   },
   {
      title: 'Специальность',
      key: 'string',
      dataIndex: 'specialty'
   },
   {
      title: 'Регион',
      key: 'region',
      dataIndex: 'region'
   }
];

const universitiesColumns = [
   {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
   },
   {
      title: 'Название',
      key: 'name',
      dataIndex: 'name'
   },
   {
      title: 'Дата основания',
      key: 'string',
      dataIndex: 'foundation_year'
   }
];

module.exports = {
   schoolColumns,
   highSchoolColumns,
   universitiesColumns
};
