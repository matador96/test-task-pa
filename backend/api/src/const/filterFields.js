const userFieldsCanBeFilter = ["id", "login"];
const schoolFieldsCanBeFilter = ["id", "name", "region", "number"];

const highSchoolFieldsCanBeFilter = ["id", "name", "specialty", "region"];
const universityFieldsCanBeFilter = ["id", "name", "building", "foundation_year"];

module.exports = {
  user: userFieldsCanBeFilter,
  school: schoolFieldsCanBeFilter,
  highschool: highSchoolFieldsCanBeFilter,
  university: universityFieldsCanBeFilter,

  fieldOpSettings: {
    user: {
      id: "$eq",
      login: "$like",
    },
    school: {
      id: "$eq",
      name: "$like",
      region: "$eq",
      number: "$eq",
    },
    highschool: {
      id: "$eq",
      name: "$like",
      specialty: "$like",
      region: "$eq",
    },
    university: {
      id: "$eq",
      name: "$like",
      foundation_year: "$eq",
      building: "$like",
    },
  },
};
