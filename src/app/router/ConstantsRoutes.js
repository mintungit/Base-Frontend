import React, { lazy } from "react";

import { HomeOutlined, DashboardOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { URL } from "@url";
import { t } from "i18next";

const Home = lazy(() => import('@containers/Home/index'))
const Home2 = lazy(() => import('@containers/Home2/index'))

export const ADMIN_ROUTES = [
  {
    path: URL.MENU.HOME,
    menuName: "Dashboard",
    component: Home,
    icon: <DashboardOutlined/>,
  },
  {
    path: URL.MENU.HOME2,
    menuName: "Home",
    icon: <HomeOutlined/>,
    children: [
      {
        path: URL.MENU.HOME2_CHILDREN,
        menuName: "Home children",
        component: Home2,
      },
    ],
  },
];

export function ConstantsRoutes() {
  return ADMIN_ROUTES;
}
