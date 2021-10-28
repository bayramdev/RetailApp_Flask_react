import { lazy } from 'react';

const Home = lazy(() => import('./views/home/Home'));
const Terms = lazy(() => import('./views/dashboard/Terms'))
const Privacy = lazy(() => import('./views/dashboard/Privacy'))
const PersionalSetting = lazy(() => import('./views/setting/PersionalSetting'))

const AdminHome = lazy(() => import('./views/admin/AdminHome'));
const AdminLinkManage = lazy(() => import('./views/admin/AdminLinkManage'));
const AdminUsers = lazy(() => import('./views/admin/AdminUsers'));
const AdminSettings = lazy(() => import('./views/admin/AdminSettings'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/setting', name: 'Setting', component: PersionalSetting },
  { path: '/admin', name: 'Admin', component: AdminHome },
  { path: '/users', name: 'Users', component: AdminUsers },
  { path: '/links', name: 'Link Manage', component: AdminLinkManage}
];

export default routes;
