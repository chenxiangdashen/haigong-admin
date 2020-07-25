<<<<<<< HEAD
import React, {Component} from 'react';
import './App.scss';
import './mock/index';
import './utils/type_extrend_util';
import  * as GlobalUtil from './utils/util';
import {GlobalEnvParams} from './core/envconfig';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from 'antd';
import Login from './views/login/login';
import Main from './views/main/main';
import AuthRoute from './router/authroute';
import store from './store/index';
import {Provider} from 'react-redux';
import { hot } from 'react-hot-loader'

Component.prototype.GlobalEnvParams = GlobalEnvParams;
Component.prototype.GlobalUtil = GlobalUtil;

class App extends Component {
    render() {
        const browserRouter = this.GlobalEnvParams.IS_BrowserRouter;
        let router = null;
        if (browserRouter) {
            router = <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <AuthRoute path='/' component={Main}/>
                </Switch>
            </BrowserRouter>;
        } else {
            router = <HashRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <AuthRoute path='/' component={Main}/>
                </Switch>
            </HashRouter>;
        }

        return (
            <Provider store={store}>
                <LocaleProvider locale={zh_CN}>
                    {router}
                </LocaleProvider>
            </Provider>
        );
    }
}

export default hot(module)(App);
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 58c7383797b6289a41d659e9e34d99f78b4a2ddb
