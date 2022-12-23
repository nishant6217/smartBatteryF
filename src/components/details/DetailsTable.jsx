import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


function CustomTable(props) {
  const [data, setData] = useState(null);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Pr Signal',
      dataIndex: 'psignal',
      key: 'psignal',
    },
    {
      title: 'Criteria',
      dataIndex: 'criteria',
      key: 'criteria',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Active Days',
      dataIndex: 'days',
      key: 'days',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <DeleteIcon style={{cursor:"pointer"}} onClick={() => {
            axios.post('http://localhost:3030/api/delete-sample-data', {
              'token': localStorage.getItem('token'),
              id: record.key
            }).then(() => {
              
              setData((pData)=>{
               return pData.filter(i=>i.key!== record.key)
              })
            })
          }} />
        </Space>
      ),
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      props.tableData.length && setData(props.tableData)
    },1000)
  }, [])


  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
  )
}
export default CustomTable;