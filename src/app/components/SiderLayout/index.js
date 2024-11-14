import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { ConstantsRoutes } from '@app/router/ConstantsRoutes';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function SiderLayout(props) {
  const CONSTANTS_ROUTES = ConstantsRoutes();
  const [itemsMenu, setItemsMenu] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState(CONSTANTS_ROUTES[0].path);

  const {
    collapsed,
    setCollapsed
  } = props;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    CONSTANTS_ROUTES?.map(menu => {
      if (menu.children) {
        let findMenu = menu.children.find(e => e.path === currentPath);
        if (findMenu) {
          setOpenKeys([menu.path]);
        }
      }
    });
    setSelectedKey(currentPath);
  }, [location.pathname]);

  useEffect(() => {
    const itemsMenu = CONSTANTS_ROUTES.map(route => {
      return renderItem(route);
    });
    setItemsMenu(itemsMenu);
  }, []);

  function renderItem({ path, icon, menuName, component, children }) {
    if (children) {
      return {
        key: path,
        icon: icon,
        label: menuName,
        children: children.map(childRoute => renderItem(childRoute))
      };
    } else {
      return {
        key: path,
        icon: icon,
        label: component ? (
          <Link to={path} className="text-decoration-none">
            {menuName}
          </Link>
        ) : (
          menuName
        ),
      };
    }
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