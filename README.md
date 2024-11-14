Code needs to be submitted to your personal GitHub account as a public project. Please don't forget to send back the link to your task. If you need to give additional instructions about your project include them into README.md file.

1. The page should have inputs for login,
   The home page must have the left menu and main content section. The home page should be opened after logging in.
2. There should be 3 sections in the left menu: Universities, Schools, High Schools, and the content corresponding to the selected route should be opened on the right side
3. There should be a filter above the content part, and this filter component should be written so that if it is applied to 30 pages in the future, it will be useful for all of them.
4. There should be filters such as selects, number, date and text inputs and a separate button to clear these filters
5. When selecting, writing or changing the value of filters, a request must be sent to the backend
6. On the universities page table there should be a Corpus column. Each row of this column should have an eye button, and when you click on it, the list of corpora of that university should open in a modal.
7. When deleting the University, School or High School item on each page, a confirm dialogue should be opened and this confirm dialogue should be written as a custom component
8. You can use any mock API services for simulating the backend.

Different pages must have various filters, for example, in universities, there must be a search by the year of establishment of the university, and by region. That is, the filter fields of each page must be different.
There should be specific filter fields for each educational institution.
The filter component must be implemented only once and shouldn’t depend on the fields of educational institutions.

Please use the following stack: React, RTK, React Route
