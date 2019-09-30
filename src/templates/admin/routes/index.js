import AuthRoutes from '../auth/routes';
import UserRoutes from '../user/routes';
const ReportMenuRoutes = [{
    path: 'admin',
    redirect: 'admin/auth/sysAuth',
    name: 'Admin',
    component: () => import('../AdminLayout'),
    children: [
      ...AuthRoutes,
      ...UserRoutes
    ]
  }]
  
  export default ReportMenuRoutes