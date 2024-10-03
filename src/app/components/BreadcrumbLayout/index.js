import React, { useState } from 'react';
import { t } from 'i18next';
import Cookies from 'js-cookie';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function BreadcrumbLayout(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Breadcrumb className='mx-3 pt-3'>
      <Breadcrumb.Item>
        <Link to={'/'} className='text-decoration-none'>
          User
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={'/home2-children'} className='text-decoration-none'>
          Bill
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function mapStateToProps(store) {
  return { };
}

export default withTranslation()(connect(mapStateToProps)(BreadcrumbLayout));