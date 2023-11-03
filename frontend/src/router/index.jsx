import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { GENERAL_ROUTES } from './generals';
import { PRIVATE_ROUTES } from './privates';
import AppRoute from './AppRoute';
import { Outlet } from 'react-router-dom';
import { GeneralLayout } from '@/component/Layouts';

const layouts = {
  general: GeneralLayout,
};

const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      {[...PRIVATE_ROUTES, ...GENERAL_ROUTES].map((item) => {
        const Layout = item.layout ? layouts[item.layout] : Outlet;
        return (
          <Route element={<Layout />} key={item.path}>
            <Route
              element={
                <AppRoute
                  path={item.path}
                  permissions={item.permissions}
                  privateroute={item.privateroute}
                  stage={item.stage}
                  title={item.title}
                >
                  <item.component />
                </AppRoute>
              }
              key={item.path}
              path={item.path}
            />
          </Route>
        );
      })}
    </>
  )
);
export default RootRouter;
