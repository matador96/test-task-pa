/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Content, Title } from '@shared/ui';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';

const AdminPage = () => {
   const authData = useSelector(getUserAuthData);

   return (
      <Content>
         <Title>Добро пожаловать {authData?.login}!</Title>
         <p>
            Code needs to be submitted to your personal GitHub account as a public
            project. Please don't forget to send back the link to your task. If you
            need to give additional instructions about your project, include them in
            the <code>README.md</code> file.
         </p>

         <ol>
            <li>
               The page should have inputs for login. The home page must have a left
               menu and main content section, and it should open after logging in.
            </li>
            <li>
               There should be 3 sections in the left menu: Universities, Schools,
               and High Schools. The content corresponding to the selected route
               should be opened on the right side.
            </li>
            <li>
               There should be a filter above the content part, and this filter
               component should be written so that if it is applied to 30 pages in
               the future, it will be useful for all of them.
            </li>
            <li>
               The filters should include <code>select</code> fields, number, date,
               and text inputs, as well as a separate button to clear these filters.
            </li>
            <li>
               When selecting, writing, or changing the value of filters, a request
               must be sent to the backend.
            </li>
            <li>
               On the universities page, the table should have a "Corpus" column.
               Each row of this column should have an eye button, and when you click
               on it, the list of corpora for that university should open in a modal.
            </li>
            <li>
               When deleting the University, School, or High School item on each
               page, a confirm dialogue should be opened. This confirm dialogue
               should be written as a custom component.
            </li>
            <li>You can use any mock API services for simulating the backend.</li>
         </ol>

         <p>
            Different pages must have various filters. For example, on the
            universities page, there should be a search by the year of establishment
            and by region. That is, the filter fields of each page must be different.
            There should be specific filter fields for each educational institution.
            The filter component must be implemented only once and shouldn’t depend
            on the fields of educational institutions.
         </p>

         <p>
            Please use the following stack: <strong>React, RTK, React Router</strong>
            .
         </p>
      </Content>
   );
};

export default AdminPage;
