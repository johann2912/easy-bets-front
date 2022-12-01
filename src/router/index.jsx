import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBar } from '../components/sideBar/SideBar';
import Context from '../context/sessionContext';
import { MainWrapper } from '../styles/mainStyles';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  return (
    <MainWrapper>
      <Context>
        {({ isLoggedIn }) => {
          return (
            <BrowserRouter>
              <Routes>
                {publicRoutes.map(({ route, component }, idx) => (
                  <Route
                    key={idx}
                    path={route}
                    element={
                      <PublicRoute
                        key={idx}
                        path={route}
                        element={component}
                        isLoggedIn={isLoggedIn}
                      />
                    }
                  />
                ))}
                <>
                  {privateRoutes.map(({ route, component }, idx) => (
                    <Route
                      key={idx}
                      path={route}
                      element={
                        <>
                          <SideBar />
                          <PrivateRoute
                            key={idx}
                            path={route}
                            element={component}
                            isLoggedIn={isLoggedIn}
                          />
                        </>
                      }
                    />
                  ))}
                </>
              </Routes>
            </BrowserRouter>
          );
        }}
      </Context>
    </MainWrapper>
  );
};

export default AppRouter;
