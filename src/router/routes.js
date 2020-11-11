import {lazy} from "react";

const routers =  [
  {
    path:'/admin/home',
    component:lazy(() => import('@/pages/admin/home/home')),
    auth:true
  },
  {
    path:'/admin/BJ-area',
    component:lazy(() => import('@/pages/admin/blower-judgment-area/blower-judgment-area')),
    auth:true
  },
  {
    path:'/admin/blower-info',
    component:lazy(() => import('@/pages/admin/blower-info/blower-info')),
    auth:true
  },
  {
    path:'/admin/wind-info',
    component:lazy(() => import('@/pages/admin/wind-info/wind-info')),
    auth:true
  },
  {
    path:'/admin/point-associated',
    component:lazy(() => import('@/pages/admin/point-associated/point-associated')),
    auth:true
  },
];
export default routers
