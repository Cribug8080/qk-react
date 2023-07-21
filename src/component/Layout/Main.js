import React from 'react'
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Home from '../Home/Home';
import Nav from '../Nav/Index'

const { Sider, Content } = Layout;

export default function Main() {
  return (
    <Layout>
      <Sider className='sider' theme='light'>
        <Nav />
      </Sider>
      <Content className='main-wrapper'>
        <Outlet />
      </Content>
    </Layout>
  )
}
