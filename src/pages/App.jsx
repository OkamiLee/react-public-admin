import React, {Component, Suspense, lazy } from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import 'antd/dist/antd.less';
import '@/styles/reset.less'
import store from '@/store/store'
class App extends Component{
  componentDidMount() {
    store.subscribe(()=>{
      console.log(store.getState())
    })
  }

  render() {
    return (
      <Router basename={'/platform'}>
        <Suspense fallback={<div/>}>
          <Switch>
            <Route  path='/login' component={lazy(() => import('./login/login'))}/>
            <Route path='/admin' component={lazy(() => import('./layout/layout'))}/>
            <Redirect path="/" exact to="/admin/home" />
            <Route path='*' component={lazy(() => import('./error/error'))}/>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}
export default App;
