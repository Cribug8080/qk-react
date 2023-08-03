import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './component/Layout/Main'
import Home from './component/Home/Home'
import Avatar from './component/Avatar'
import Loading from './component/Loading'
import Page404 from './component/Error/Page404'
import './App.css';

const G2Wrapper = lazy(() => import('./component/antvG2/index'));
const Heart = lazy(() => import('./component/antvG2/Heart'));
const S2Wrapper = lazy(() => import('./component/antvS2/index'));
const Table = lazy(() => import('./component/antvS2/Table'));

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'avator',
        Component: Avatar,
      },
      {
        path: 'g2',
        Component: G2Wrapper,
        children: [
          {
            path: 'heart',
            Component: Heart,
          }
        ]
      },
      {
        path: 's2',
        Component: S2Wrapper,
        children: [
          {
            path: 'table',
            Component: Table,
          }
        ]
      },
    ]
  },
  {
    path: '*',
    Component: Page404,
  }
], {
  basename: window.__POWERED_BY_QIANKUN__ ? '/react' : '/'
})

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
