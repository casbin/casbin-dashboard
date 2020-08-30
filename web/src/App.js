import React from 'react';
<<<<<<< HEAD
import {Switch, Route, Redirect} from 'react-router-dom'
import Frame from './components/frame/Index'
import 'antd/dist/antd.css';
import {dashboardRoutes} from "./routes";
import {isLogined} from './utils/auth'


function App(){
  return isLogined() ? ( 
      <Frame>
      <Switch>
          {dashboardRoutes.map(route => {
          return(
            <Route 
            key={route.path} 
            path={route.path} 
            exact = {route.exact}
            render={routeProps=>{
              return <route.component{...routeProps}/>
=======
import './App.css';
import * as Setting from "./Setting";
import {Switch, Route} from 'react-router-dom'
import HomePage from "./HomePage";
import {Layout, Menu} from "antd";
import ModelPage from "./ModelPage";
import AdapterPage from "./AdapterPage";
import EnforcerPage from "./EnforcerPage";


const {Header, Footer} = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
    };

    Setting.initServerUrl();
  }

  getUrlPath() {
    // eslint-disable-next-line no-restricted-globals
    return location.pathname;
  }

  componentDidMount() {
    const path = this.getUrlPath();
    switch(path.includes){
      case 'model': this.setState({ selectedMenuKey: 2 });
        break;
      case 'adapter': this.setState({ selectedMenuKey: 3 });
        break;
      case 'enforcer': this.setState({ selectedMenuKey: 4 });
        break;
      default: this.setState({ selectedMenuKey: 1 });
           }
  }

  render() {
    return (
        <div>
          <div id="content-wrap">
            <Layout className="layout">
              <Header style={{padding: '0', marginBottom: '3px'}}>
                <div className="logo"/>

                <Menu
                    // theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[`${this.state.selectedMenuKey}`]}
                    style={{lineHeight: '64px'}}
                
                >
                

                  <Menu.Item key="1">
                    <a href="/">
                      Home
                    </a>
                  </Menu.Item>
                  {
                    !this.getUrlPath().includes('model') ? null :
                      <Menu.Item key="2">
                        <a href="/#">
                          Model
                        </a>
                      </Menu.Item>
                  }
                  {
                    !this.getUrlPath().includes('adapter') ? null :
                      <Menu.Item key="3">
                        <a href="/#">
                          Adapter
                        </a>
                      </Menu.Item>
                  }
                  {
                    !this.getUrlPath().includes('enforcer') ? null :
                      <Menu.Item key="4">
                        <a href="/#">
                          Enforcer
                        </a>
                      </Menu.Item>
                  }
                  <Menu.Item key='5' style={{float: 'right'}}>
                    <a target="_blank" href="https://github.com/casbin/casbin-dashboard" rel='noopener noreferrer'>
                      <img alt="GitHub stars" src="https://img.shields.io/github/stars/casbin/casbin-dashboard?style=social" />
                    </a>
                  </Menu.Item>
                </Menu>
              </Header>
            </Layout>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/model/:modelId" component={ModelPage}/>
              <Route exact path="/adapter/:adapterId" component={AdapterPage}/>
              <Route exact path="/enforcer/:enforcerId" component={EnforcerPage}/>
            </Switch>
          </div>
          {/*How to keep your footer where it belongs ?*/}
          {/*https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/*/}
          <Footer id="footer" style={
            {
              borderTop: '1px solid #e8e8e8',
              backgroundColor: 'white',
              textAlign: 'center',
>>>>>>> b6c9fe06e438bb12c0d13c8406443e4ab07c32cb
            }
          }
            />
          );
        })}
          <Redirect to ={dashboardRoutes[0].path} from="/dashboard"/>
          <Redirect to ="/404" />
        </Switch>
        </Frame>
  ):(
    <Redirect to ="/login" />
  );
}

export default App;