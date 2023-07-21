import { Layout, Menu } from 'antd';
import Home from './component/Home/Home';
import Nav from './component/Nav/Index'
import './App.css';

const { Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider className='sider' theme='light'>
          <Nav />
        </Sider>
        <Content className='main-wrapper'>
          <Home />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
