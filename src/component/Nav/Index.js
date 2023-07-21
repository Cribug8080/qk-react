import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
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
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7')]),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 12', '12'),
  ]),
];
const Nav = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Nav;