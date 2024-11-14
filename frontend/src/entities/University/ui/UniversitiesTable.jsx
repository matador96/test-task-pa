import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, message, Modal, Tooltip } from 'antd';
import { GetUniversities } from '../model/GetUniversities';
import { DeleteUniversityById } from '../model/DeleteUniversityById';
import { Button, VerticalSpace } from '@shared/ui';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import Pagination, { initialPaginationSettings } from '@widgets/Pagination';
import DeleteEntityButton from '@widgets/Button/DeleteEntityButton';
import { ExclamationCircleFilled } from '@ant-design/icons';
import Filter from '@widgets/Filter';
import { filterToObj } from '@shared/utils/filterToObj';
import ListOfCorpusesByUniversityName from './ListOfCorpusesByUniversityName';

const { confirm } = Modal;

import {
   getColumnSearchProps,
   onSearchFilterTable,
   onTableChange
} from '@shared/ui/Table';
import { filterListUniversities } from '@shared/const/filterSettings';
import { universitiesColumns } from '@shared/const/tableColumns';

const info = (name) => {
   Modal.info({
      title: 'Список корпусов данного университета',
      content: <ListOfCorpusesByUniversityName name={name} />,
      onOk() {},
      maskClosable: true,
      okText: 'Закрыть'
   });
};

const UniversitiesTable = () => {
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
         title: 'Корпус',
         key: 'building',
         dataIndex: 'building',
         render: (_, record) => (
            <>
               {_}{' '}
               <Button
                  type="link"
                  onClick={() => info(record.name)}
                  icon={<EyeOutlined />}
               />
            </>
         )
      },

      {
         title: 'Действие',
         key: 'action',
         width: 140,
         render: (_, record) => (
            <Space size="middle">
               <DeleteEntityButton
                  id={record.id}
                  callbackFetch={DeleteUniversityById}
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

      GetUniversities({
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
            filterList={filterListUniversities}
            setFilters={setFilters}
         />
         <VerticalSpace />
         <Table
            rowKey="id"
            columns={[...universitiesColumns, ...actions]}
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

export default UniversitiesTable;
