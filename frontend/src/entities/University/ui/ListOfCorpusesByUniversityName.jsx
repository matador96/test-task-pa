import { Button, Modal, Card, Space } from 'antd';
import { useState, useEffect } from 'react';
import { Form, Input, Select } from '@shared/ui';
import { GetUniversities } from '@entities/University/model/GetUniversities';

import { EyeOutlined } from '@ant-design/icons';
import { Row, Col, Radio } from 'antd';
const { TextArea } = Input;

const ListOfCorpusesByUniversityName = (props) => {
   const { name } = props;
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (name) {
         fetchData(name);
      }
   }, [name]);

   const fetchData = (n) => {
      setIsLoading(true);
      GetUniversities({
         name: n
      }).then((response) => {
         setData(response.data);
      });
   };

   return (
      <Space direction="vertical" style={{ width: '100%' }}>
         {data.map((item) => (
            <Card
               key={item.id}
               title={item.name}
               size="small"
               style={{ width: 300 }}>
               <p>Корпус: {item.building}</p>
               <p>Год основания: {item.foundation_year}</p>
            </Card>
         ))}
      </Space>
   );
};

export default ListOfCorpusesByUniversityName;
