import React from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, BrowserRouter as Router, NavLink, withRouter } from 'react-router-dom';
import Home from './page/Home';
import Ywpj from './page/Ywpj';
import Pzsc from './page/Pzsc';
import Pzcx from './page/Pzcx';
import Scpz from './page/Scpz';
import Jcsz from './page/Jcsz';
const { SubMenu } = Menu;


const { Header, Content, Sider } = Layout;


const LeftSider = withRouter(({ history }) => {
  return (
    <Sider className="sidebar">
      <div className="mainmenu">
        <Menu selectedKeys={[history.location.pathname]} style={{ height: '100%' }}  mode="vertical">
          <Menu.Item key="/">
            <NavLink to="/"><Icon type="home" />首页</NavLink>
          </Menu.Item>
          <Menu.Item key="/ywpj">
            <NavLink to="/ywpj"><Icon type="file-text" />业务票据</NavLink>
          </Menu.Item>
          <SubMenu key="sub2" title={
              <span>
                <Icon type="appstore" />
                <span>凭证管理</span>
              </span>
            }
          >
            <Menu.Item key="/pzsc">
              <NavLink to="/pzsc"><Icon type="file-search" />凭证生成</NavLink>
            </Menu.Item>
            <Menu.Item key="/pzcx">
              <NavLink to="/pzcx"><Icon type="file-search" />凭证查询</NavLink>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="/scpz">
            <NavLink to="/scpz"><Icon type="sliders" />生成凭证配置</NavLink>
          </Menu.Item>
          <Menu.Item key="/jcsz">
            <NavLink to="/jcsz"><Icon type="setting" />基础设置</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  )
})

const Rightcontent = () => {
  return (
    <Content style={{ padding: '15px' }}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/ywpj" component={Ywpj}></Route>
        <Route path="/pzcx" component={Pzcx}></Route>
        <Route path="/pzsc" component={Pzsc}></Route>
        <Route path="/scpz" component={Scpz}></Route>
        <Route path="/jcsz" component={Jcsz}></Route>
      </Switch>
    </Content>
  )
}

class Main extends React.Component {
  render() {
    return (
      <Layout className="pagelayout">
        <Header className="pageheader">
          <div className="logo">LOGO</div>
        </Header>
        <Layout>
          <LeftSider />
          <Rightcontent />
        </Layout>
      </Layout >
    );
  }
}




export default withRouter(Main);
