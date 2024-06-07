import React, { lazy } from "react";

import {
  HomeIcon,
  SettingIcon,
  UserIcon,
  ListIcon,
  TaskIcon,
} from "@app/components/Icons";

import { URL } from "@url";
import { t } from "i18next";

const Home = lazy(() => import('@containers/Home/index'))
const Home2 = lazy(() => import('@containers/Home2/index'))

function renderIcon(icon) {
  return (
    <span role="img" className="main-menu__icon">
      <div className="position-absolute" style={{ top: "50%", transform: "translateY(-50%)" }}>
        <div className="position-relative" style={{ width: "30px", height: "30px" }}>
          {icon}
        </div>
      </div>
    </span>
  );
}

export const ADMIN_ROUTES = [
  // {
  //   key: URL.MENU.GENERAL_CATEGORIES,
  //   menuName: "DANH_MUC_CHUNG",
  //   icon: renderIcon(<ListIcon />),
  //   children: [
  //     {
  //       path: URL.MENU.CAMERA_TYPE,
  //       menuName: "CAMERA_TYPE",
  //       component: CameraType,
  //       permission: [create(resources.CAMERA_TYPE, actions.READ)],
  //     },
  //   ],
  // },
  {
    path: URL.MENU.HOME,
    menuName: "HOME",
    component: Home,
    // permission: [create(resources.SERVER_LOG, actions.READ)],
    icon: renderIcon(<HomeIcon />),
  },
  {
    path: URL.MENU.HOME2,
    menuName: "HOME2",
    component: Home2,
    // permission: [create(resources.SERVER_LOG, actions.READ)],
    icon: renderIcon(<HomeIcon />),
  },
];

export function ConstantsRoutes() {
  return ADMIN_ROUTES;
}
