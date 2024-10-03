import React, { useState } from 'react';
import { t } from 'i18next';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { Layout, Button } from 'antd';
import { withTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

function Header(props) {
  const {
    collapsed,
    setCollapsed
  } = props
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout.Header className='p-0 bg-white' type='small'>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  );
}

function mapStateToProps(store) {
  return { };
}

export default withTranslation()(connect(mapStateToProps)(Header));