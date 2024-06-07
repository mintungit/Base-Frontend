import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import RoutesComponent from '../../router/Routes';

function AppContent({ token, ...props }) {
  return (
    <div id="content">
      <Layout.Content className="site-layout-background">
        <RoutesComponent />
      </Layout.Content>
    </div>
  );
}

function mapStateToProps(store) {
  const { token } = store.app;
  return { token };
}

export default connect(mapStateToProps)(AppContent);