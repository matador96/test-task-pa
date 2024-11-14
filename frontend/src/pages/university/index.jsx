/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import { Title } from '@shared/ui';
import { Content } from '@shared/ui';
import UniversitiesTable from '@entities/University/ui/UniversitiesTable';

const UniversityPage = () => {
   return (
      <Content>
         <Title>Университеты</Title>
         <UniversitiesTable />
      </Content>
   );
};

export default UniversityPage;
