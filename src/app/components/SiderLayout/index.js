import React, { useState, useEffect } from 'react';
import { t } from 'i18next';
import Cookies from 'js-cookie';
import { Sider, Menu, Layout } from 'antd';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UploadOutlined, DashboardOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { ADMIN_ROUTES } from '../../router/ConstantsRoutes';

function SiderLayout(props) {
  const [itemsMenu, setItemsMenu] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState(ADMIN_ROUTES[0].path);

  const {
    collapsed,
    setCollapsed
  } = props

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    ADMIN_ROUTES?.map(menu => {
      if(menu.children){
        let findMenu = menu.children.find(e => e.path === currentPath);
        if(findMenu){
          setOpenKeys([menu.path])
        }
      }
    })
    setSelectedKey(currentPath); // Cập nhật key tương ứng
  }, [location.pathname]);

  useEffect(() => {
    const itemsMenu = ADMIN_ROUTES.map(route => {
      const item = renderItem(route);
      if (route.children) {
        item.children = route.children.map(childRoute => renderItem(childRoute));
      }
      return item;
    });
    setItemsMenu(itemsMenu);
  }, []);

  function renderItem({ path, icon, menuName, component, children }) {
    return {
      key: path,
      icon: icon,
      label: component ? (
        <Link to={path} className='text-decoration-none'>
          {menuName}
        </Link>
      ) : (
        menuName
      ),
      children: children ? [] : null // Khởi tạo children
    };
  }

  const handleOpenChange = (keys) => {
    console.log(keys, "keys");
    setOpenKeys(keys);
  };

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        items={itemsMenu}
        onOpenChange={handleOpenChange}
      />
    </Layout.Sider>
  );
}

function mapStateToProps(store) {
  return { };
}

export default withTranslation()(connect(mapStateToProps)(SiderLayout));