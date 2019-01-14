/**
 * App main file
 *
 * @author Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 */
import React from 'react'
import { Provider } from 'react-redux'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import { NotificationContainer } from 'react-notifications'
import RctThemeProvider from './container/RctThemeProvider'

// Css
import './lib/reactifyCss'

// App
import App from './container/App'
import configureStore from './store'

const MainApp = () => (
  <Provider store={configureStore()}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <RctThemeProvider>
        <NotificationContainer />
        <App />
      </RctThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>
)

export default MainApp
