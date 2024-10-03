import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import RoutesComponent from '../../router/Routes';
import BreadcrumbLayout from '@components/BreadcrumbLayout';

function AppContent({ token, ...props }) {
  return (
    <Layout.Content className='m-3 p-3 bg-white' style={{ borderRadius: 10 }}>
      <RoutesComponent />
    </Layout.Content>
  );
}

function mapStateToProps(store) {
  const { token } = store.app;
  return { token };
}

export default connect(mapStateToProps)(AppContent);