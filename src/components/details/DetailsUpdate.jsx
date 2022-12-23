import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  InputNumber,
} from 'antd';
const UpdateDetails = (props) => {


  return (
    <>
  <span style={{marginRight:"auto", marginTop:"1vh" ,marginLeft:"2vh",fontWeight:"bold"}}>Criteria</span>
      <Form
        wrapperCol={{
          span: 22,
        }}
        name="basic"
        className='login-form'
        initialValues={{
          remember: true,
          days: "Monday"
        }}
        onFinish={props.onFinish}
        style={{overflowY:'scroll'}}
        layout="vertical"
      >
        
        <Form.Item name='name'>
          <Input style={{ margin: "2vh 0vh 0vh 2vh" }} placeholder='Name' />
        </Form.Item>
        <Form.Item label={<span style={{marginLeft:"1vw", fontWeight:"bold"}}>Criteria</span>}name='criteria'>
          <Radio.Group  style={{ display: "flex" }}>
            <Radio style={{ margin: "0vh 0vh 0vh 2vh" }} value="Gr Than"> Gr Than </Radio>
            <Radio style={{  margin: "0vh 0vh 0vh 2vh" }} value="Ls Than"> Ls Than </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name='value'>
          <InputNumber style={{width:"100%", margin: "0vh 0vh 0vh 2vh" }} placeholder='Value' />
        </Form.Item>
        <Form.Item name='days'>
          <Select style={{ height: "4vh", margin: "0vh 0vh 0vh 2vh" }}>
            <Select.Option default value="EveryDay">EveryDay</Select.Option>
            <Select.Option value="Monday">Monday</Select.Option>
            <Select.Option value="Tuesday">Tuesday</Select.Option>
            <Select.Option value="Wednesday">Wednesday</Select.Option>
            <Select.Option value="Thursday">Thursday</Select.Option>
            <Select.Option value="Friday">Friday</Select.Option>
            <Select.Option value="Saturday">Saturday</Select.Option>
            <Select.Option value="Sunday">Sunday</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="dk-1" value='DK-1'>
          <Select defaultValue="DK-1" style={{ margin: "0vh 0vh 0vh 2vh" }}>
            <Select.Option default value="DK-1">DK-1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name='email'>
          <Input style={{ margin: "0vh 0vh 0vh 2vh" }} placeholder='Email' />
        </Form.Item>
        <Form.Item name='phone'>
          <Input style={{ margin: "0vh 0vh 0vh 2vh" }} placeholder='Phone' />
        </Form.Item>
        <div style={{display:"flex",justifyContent:"flex-end",marginBottom:"2vh"}}>
          <Button htmlType="submit">Button</Button>
        </div>
      </Form>
    </>
  );
};
export default UpdateDetails;
