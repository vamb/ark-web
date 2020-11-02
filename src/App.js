import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
import logo from './logo.svg';
import './antd.css';
import './App.css';
import ErrorPage from "./page/Error/ErrorPage";
import routerHistory from './utils/routerHistory'
import LayoutWrapper from "./component/Layout/LayoutWrapper";

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <Spin>
        <Spin size="large" />
      </Spin>
    )
  } else if (error) {
    return error
  } else {
    return null
  }
}

const PageNotFound = ({ location }) => {
  console.log('PageNotFound location', location)
  return(
    <ErrorPage path={location.pathname} code={404} />
  )
}

const NoPermission = ({ location }) => (
  <ErrorPage path={location.pathname} code={403} />
)

const ArkPageConfig = {
  agent: Loadable({
    loading: Loading,
    // loader: () => import('@Page/PanamaHome')
    loader: () => <div>test ArkPageConfig</div>
  })
}

const App =()=> {

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <BrowserRouter history={routerHistory} basename={'/ark'}>
      <LayoutWrapper>
        <Switch>
          {/*<Route exact path={'/'} component={Panama.Home} />*/}

          <Route exact path={'/agent'} component={ArkPageConfig.agent} />

          <Route exact path={'/no-permission'} component={NoPermission} />

          <Route component={PageNotFound} />
        </Switch>
      </LayoutWrapper>
    </BrowserRouter>
  )
}

export default App;
