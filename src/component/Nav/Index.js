import React from 'react';
import { AppstoreAddOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link>HOME</Link>, '/', <HomeOutlined />),
  getItem(<Link>Avator</Link>, '/avator', <AppstoreAddOutlined />),
];
// const items = [
//   getItem(<Link to={'/'}>HOME</Link>, '/', <HomeOutlined />),
//   getItem(<Link to={'/avator'}>Avator</Link>, '/avator', <AppstoreAddOutlined />),
// ];
const Nav = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log('click ', e);
    // window.history.replaceState('', undefined, e.key);
    navigate(e.key);
  };
  const location = useLocation();
  // console.log('location', location)
  return (
    <Menu
      onClick={onClick}
      style={{
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
      defaultSelectedKeys={[location.pathname]}
      // defaultOpenKeys={['component']}
      mode="inline"
      items={items}
    />
  );
};
export default Nav;