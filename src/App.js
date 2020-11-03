import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
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

const PageNotFound = ({ location }) => (
  <ErrorPage path={location.pathname} code={404} />
)

const NoPermission = ({ location }) => (
  <ErrorPage path={location.pathname} code={403} />
)

const ArkPageConfig = {
  Agent: Loadable({
    loading: Loading,
    loader: () => import('./page/AgentPage')
  })
}

// const ArkPage = Loadable({
//   loading: Loading,
//   loader: () => import('./page/AgentPage')
// })

const App =()=> {
  const [initLang, setInitLang] = useState(false)

  useEffect(() => {
    loadLang()
  }, [])

  const loadLang = async () => {
    setInitLang(true)
  }
  return initLang?(
    <BrowserRouter history={routerHistory} basename={'/ark'}>
      <LayoutWrapper>
        <Switch>
          {/*<Route exact path={'/'} component={Panama.Home} />*/}

          <Route exact path={'/agent'} component={ArkPageConfig.Agent} />

          <Route exact path={'/no-permission'} component={NoPermission} />

          <Route component={PageNotFound} />
        </Switch>
      </LayoutWrapper>
    </BrowserRouter>
  ):(
    <Spin>
      <Spin size="large" />
    </Spin>
  )
}

export default App;
