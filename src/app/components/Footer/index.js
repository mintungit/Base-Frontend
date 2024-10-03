import React, { useState } from 'react';
import { t } from 'i18next';
import { Layout } from 'antd';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Footer(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout.Footer className='px-0 py-2 bg-white'>
      <div className='text-center'>
        Footer
      </div>
    </Layout.Footer>
  );
}

function mapStateToProps(store) {
  return { };
}

export default withTranslation()(connect(mapStateToProps)(Footer));