import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './style.sass'
import { items } from './data';
const { Sider } = Layout;
const LayoutContainer = ({ children }) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className='layout'>
        <Sider style={{
          background: 'white',
          paddingTop: '50px'
        }} width={260} trigger={null} >
          <Menu
            onClick={({ key }) => {
              navigate(key)
            }}
            theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className='main'>
          <div className='main-container'>
            {children}
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutContainer;