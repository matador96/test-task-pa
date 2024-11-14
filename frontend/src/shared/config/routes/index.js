import { AuthPage, LogoutPage } from '@pages/auth';
import AdminMainPage from '@pages/dashboard/index';
import SchoolsPage from '@pages/school/index';
import HighSchoolsPage from '@pages/highschool/index';
import UniversityPage from '@pages/university/index';
import { Navigate } from 'react-router-dom';

const AppRoutes = {
   LOGIN: 'login',
   LOGOUT: 'logout',
   DASHBOARD: 'dashboard',
   SCHOOLS: 'schools',
   HIGHSCHOOLS: 'highschools',
   UNIVERSITIES: 'universities',
   MAIN: 'main'
};

export const AppLayout = {
   adminLayout: 'adminLayout',
   centered: 'centered'
};

export const RoutePath = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.LOGIN]: '/login',
   [AppRoutes.LOGOUT]: '/logout',
   [AppRoutes.DASHBOARD]: '/dashboard',
   [AppRoutes.SCHOOLS]: '/schools',
   [AppRoutes.HIGHSCHOOLS]: '/highschools',
   [AppRoutes.UNIVERSITIES]: '/universities'
};

export const routeList = {
   [AppRoutes.MAIN]: {
      path: RoutePath[AppRoutes.MAIN],
      element: <Navigate to={RoutePath[AppRoutes.LOGIN]} />,
      layout: AppLayout.centered
   },

   [AppRoutes.DASHBOARD]: {
      path: RoutePath[AppRoutes.DASHBOARD],
      element: <AdminMainPage />,
      layout: AppLayout.adminLayout,
      authOnly: true
   },

   [AppRoutes.SCHOOLS]: {
      path: RoutePath[AppRoutes.SCHOOLS],
      element: <SchoolsPage />,
      layout: AppLayout.adminLayout
   },

   [AppRoutes.UNIVERSITIES]: {
      path: RoutePath[AppRoutes.UNIVERSITIES],
      element: <UniversityPage />,
      layout: AppLayout.adminLayout
   },

   [AppRoutes.HIGHSCHOOLS]: {
      path: RoutePath[AppRoutes.HIGHSCHOOLS],
      element: <HighSchoolsPage />,
      layout: AppLayout.adminLayout
   },

   [AppRoutes.LOGIN]: {
      path: RoutePath[AppRoutes.LOGIN],
      element: <AuthPage isLoginForm={true} />,
      layout: AppLayout.centered
   },
   [AppRoutes.LOGOUT]: {
      path: RoutePath[AppRoutes.LOGOUT],
      element: <LogoutPage />,
      layout: AppLayout.centered,
      authOnly: true
   }
};
