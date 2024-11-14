/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import { Title } from '@shared/ui';
import { Content } from '@shared/ui';
import HighSchoolsTable from '@entities/HighSchool/ui/HighSchoolsTable';

const HighSchoolPage = () => {
   return (
      <Content>
         <Title>Старшие школы</Title>
         <HighSchoolsTable />
      </Content>
   );
};

export default HighSchoolPage;
