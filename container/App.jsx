/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react'
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import RctAppRoute from 'Components/RctAppRoute'
import { loadDictionaries } from 'Actions'
import appRoutes from 'Routes'
import { AsyncSessionPage404Component } from '../components/async'

class App extends Component {
  componentDidMount() {
    // const me = this
    // const { user, isAuth } = me.props
  }

  render() {
    const me = this
    const { user, isAuth, loading } = me.props
    const routes = appRoutes.map(item => {
      const { Component: component, isPrivate, ...rest } = item
      return isPrivate
        ? <RctAppRoute exact isAuth={isAuth} authUser={user} {...rest} />
        : <Route exact {...rest} />
    })
    return (
      loading
        ? <h1>Проверка авторизации пользователя...</h1>
        : <Router>
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              {routes}
              <Route component={AsyncSessionPage404Component} />
            </Switch>
          </Router>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { isAuth, user, loading } = auth
  return { isAuth, user, loading }
}

export default connect(mapStateToProps, {
  loadDictionaries,
})(App)
