import React, { lazy } from "react";

import { HomeOutlined, DashboardOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { URL } from "@url";
import { useTranslation } from "react-i18next";

const Home = lazy(() => import('@containers/Home/index'))
const Home2 = lazy(() => import('@containers/Home2/index'))

export function ConstantsRoutes() {
  const { t } = useTranslation(); // Đặt ở trong function component
  
  const ADMIN_ROUTES = [
    {
      path: URL.MENU.HOME,
      menuName: t("DASHBOARD"),
      component: Home,
      icon: <DashboardOutlined />,
    },
    {
      path: URL.MENU.HOME2,
      menuName: t("HOME"),
      icon: <HomeOutlined />,
      children: [
        {
          path: URL.MENU.HOME2_CHILDREN,
          menuName: t("HOME_CHILDREN"),
          component: Home2,
        },
      ],
    },
    {
      path: URL.MENU.DEMO1,
      menuName: t("DEMO1"),
      icon: <HomeOutlined />,
      children: [
        {
          path: URL.MENU.DEMO2,
          menuName: t("DEMO2"),
          icon: <HomeOutlined />,
          children: [
            {
              path: URL.MENU.DEMO4,
              menuName: t("DEMO4"),
              component: Home2,
            },
          ],
        },
        {
          path: URL.MENU.DEMO3,
          menuName: t("DEMO3"),
          component: Home2,
        },
        {
          path: URL.MENU.DEMO4,
          menuName: t("DEMO4"),
          component: Home2,
        },
      ],
    },
  ];

  return ADMIN_ROUTES;
}