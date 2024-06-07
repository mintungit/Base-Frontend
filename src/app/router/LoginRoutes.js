import React, { lazy } from 'react';
import { Redirect, Route, Outlet } from 'react-router-dom';

import { URL } from '@url';

// const ResetPassword = lazy(() => import('@containers/Authenticator/ResetPassword/index'));

const LoginRoutes = (props) => {

  return (<Outlet>
      {/* <Route exact={true} path={URL.RESET_PASSWORD} component={ResetPassword}/> */}
    </Outlet>
  );
};


export default LoginRoutes;
