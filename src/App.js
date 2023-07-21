
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './component/Layout/Main'
import Home from './component/Home/Home'
import Avator from './component/Avator'
import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/avator',
        Component: Avator,
      },
    ]
  }
], {
  basename: window.__POWERED_BY_QIANKUN__ ? '/react' : '/'
})

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
