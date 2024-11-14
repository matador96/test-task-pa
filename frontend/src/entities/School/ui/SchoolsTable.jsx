import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, message, Modal, Tooltip } from 'antd';
import { GetSchools } from '../model/GetSchools';
import { DeleteSchoolById } from '../model/DeleteSchoolById';
import { Button, VerticalSpace } from '@shared/ui';
import { DeleteOutlined } from '@ant-design/icons';
import Pagination, { initialPaginationSettings } from '@widgets/Pagination';
import DeleteEntityButton from '@widgets/Button/DeleteEntityButton';
import { ExclamationCircleFilled } from '@ant-design/icons';
import Filter from '@widgets/Filter';

import { filterToObj } from '@shared/utils/filterToObj';
const { confirm } = Modal;

import {
   getColumnSearchProps,
   onSearchFilterTable,
   onTableChange
} from '@shared/ui/Table';
import { filterListSchools } from '@shared/const/filterSettings';
import { schoolColumns } from '@shared/const/tableColumns';

const SchoolsTable = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);

   const [paramsTable, setParamsTable] = useState({
      pagination: { ...initialPaginationSettings() },
      filters: [],
      sorter: {}
   });

   const { pagination, filters } = paramsTable;

   useEffect(() => {
      fetchData();
   }, []);

   const actions = [
      {
         title: 'Действие',
         key: 'action',
         width: 140,
         render: (_, record) => (
            <Space size="middle">
               <DeleteEntityButton
                  id={record.id}
                  callbackFetch={DeleteSchoolById}
                  update={fetchData}
               />
            </Space>
         )
      }
   ];

   const onSearchTable = (searchObj) => {
      onSearchFilterTable(searchObj, paramsTable, fetchData);
   };

   const handleTableChange = (pagination, filtersTable, sorterTable) => {
      onTableChange(pagination, filtersTable, sorterTable, paramsTable, fetchData);
   };

   const closeModal = () => {
      fetchData();
   };

   const fetchData = (params = paramsTable) => {
      setIsLoading(true);

      GetSchools({
         page: params.pagination.current,
         limit: params.pagination.pageSize,
         ...params.sorter,
         ...filterToObj(params.filters)
      }).then((res) => {
         setParamsTable({
            ...params,
            pagination: { ...params.pagination, total: res.count }
         });

         setData(res.data);
         setIsLoading(false);
      });
   };

   const onChangePagination = (current, pageSize) => {
      const newParams = {
         ...paramsTable,
         pagination: { ...paramsTable.pagination, current, pageSize }
      };
      fetchData(newParams);
   };

   const setFilters = (e) => {
      setParamsTable({ ...paramsTable, filters: e });
      fetchData({ ...paramsTable, filters: e });
   };

   return (
      <>
         <Filter
            filterValues={filters}
            filterList={filterListSchools}
            setFilters={setFilters}
         />
         <VerticalSpace />
         <Table
            rowKey="id"
            columns={[...schoolColumns, ...actions]}
            dataSource={data}
            pagination={false}
            onChange={handleTableChange}
            loading={isLoading}
         />
         <VerticalSpace />
         <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {!!pagination.total && (
               <Pagination
                  pagination={pagination}
                  onChangePagination={onChangePagination}
                  isLoading={isLoading}
               />
            )}
         </Space>
      </>
   );
};

export default SchoolsTable;
