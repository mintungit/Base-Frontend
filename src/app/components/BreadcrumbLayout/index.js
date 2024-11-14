import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { ConstantsRoutes } from '@app/router/ConstantsRoutes';

function BreadcrumbLayout() {
  const [listBreadcrumb, setListBreadcrumb] = useState([])
  const location = useLocation();
  const CONSTANTS_ROUTES = ConstantsRoutes();

  useEffect(() => {
    console.log(listBreadcrumb, "listBreadcrumb");
    
    const breadcrumbBase = { path: '/', title: 'Dashboard' };
    setListBreadcrumb([breadcrumbBase]);
  
    if(breadcrumbBase.path !==  location.pathname){
      for (let e of CONSTANTS_ROUTES) {
        if (e.path === location.pathname) {
          addItemListBreadcrumb(e); 
          break;
        } else if (e.children && e.children.length > 0) {
          breadcrumbChild(e.children, { path: e.path, title: e.menuName });
        }
      }
    }
  }, [location]);
  
  const breadcrumbChild = (children, breadcrumbParent) => {
    for (let e of children) {
      if (e.path === location.pathname) {
        setListBreadcrumb((prevListBreadcrumb) => [...prevListBreadcrumb, breadcrumbParent]);
        addItemListBreadcrumb(e);
        break;
      } else if (e.children && e.children.length > 0) {
        breadcrumbChild(e.children, breadcrumbParent);
      }
    }
  };
  
  const addItemListBreadcrumb = (item) => {
    setListBreadcrumb((prevListBreadcrumb) => [
      ...prevListBreadcrumb,
      {
        path: item.path,
        title: item.menuName,
      },
    ]);
  };

  return (
    <Breadcrumb
      className='mx-3 pt-3'
      items={listBreadcrumb?.map((e, index) => ({
        key: `${e.path}-${index}`,
        title: (
          <Link
            to={e.path}
            className={`text-decoration-none`}
            style={{ color: index + 1 === listBreadcrumb.length ? 'rgb(7 89 133)' : 'inherit' }}
          >
            {e.title}
          </Link>
        ),
      }))}
    />
  );
}

function mapStateToProps(store) {
  return { };
}

export default withTranslation()(connect(mapStateToProps)(BreadcrumbLayout));