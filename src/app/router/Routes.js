import React, { Suspense, useEffect, useState } from 'react';
import { URL } from '@url';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '@components/Loading';
import NoMatch from '@containers/NoMatch';
import LoginRoutes from '@app/router/LoginRoutes';
import { ConstantsRoutes } from '@app/router/ConstantsRoutes';

function RoutesComponent({ ...props }) {
  const [token, setToken] = useState()
  const CONSTANTS_ROUTES = ConstantsRoutes();

  function renderItem({ hide, path, children, component: Component, ...router }) {
    if (hide) return null;

    let routeReturn = [];
    if (path) {
      routeReturn = [
        ...routeReturn, 
        <Route path={path} element={Component ? <Component /> : null} key={path} />
      ];
      routeReturn = [
        ...routeReturn, 
        ...renderSubItem(children)
      ];
    } else if (Array.isArray(children)) {
      routeReturn = children.map((child) => renderItem(child));
    }
    return routeReturn;
  }

  function renderSubItem(children) {
    if (!Array.isArray(children)) return [];
    return children.map((child) => renderItem(child));
  }

  return (
    <Suspense fallback={<Loading />}>
      {!token && <LoginRoutes />}
      <Routes>
        {CONSTANTS_ROUTES.map((route, index) => {
          if (!route.hide) {
            if (route.to) {
              route.to = route.to.charAt(0) !== '/' ? `/${route.to}` : route.to;
            }
            if (route.path) {
              route.path = route.path.charAt(0) !== '/' ? `/${route.path}` : route.path;
            }
            if (route.isRedirect) {
              return (
                <Route 
                  path={route.from} 
                  element={<Navigate replace to={route.to} />} 
                  key={index} 
                />
              );
            } else {
              return renderItem(route);
            }
          }
          return null;
        })}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Suspense>
  );
}

function mapStateToProps(store) {
  return { };
}

export default connect(mapStateToProps)(RoutesComponent);