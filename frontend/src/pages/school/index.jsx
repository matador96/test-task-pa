/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import { Title } from '@shared/ui';
import { Content } from '@shared/ui';
import SchoolsTable from '@entities/School/ui/SchoolsTable';

const SchoolPage = () => {
   return (
      <Content>
         <Title>Школы</Title>
         <SchoolsTable />
      </Content>
   );
};

export default SchoolPage;
