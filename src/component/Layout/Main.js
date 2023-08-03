import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Nav from '../Nav/Index'
import Loading from '../Loading'

const { Sider, Content } = Layout;

export default function Main() {
  return (
    <Layout>
      <Sider className='sider' theme='light'>
        <Nav />
      </Sider>
      <Content className='main-wrapper'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Content>
    </Layout>
  )
}
