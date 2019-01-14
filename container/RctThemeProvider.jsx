/**
 * Rct Theme Provider
 */
import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

// App locale
import AppLocale from '../lang'

// themes
import primaryTheme from './themes/primaryTheme'
import secondaryTheme from './themes/secondaryTheme'

class RctThemeProvider extends Component {
  render() {
    const { locale, activeTheme, children } = this.props
    const currentAppLocale = AppLocale[locale.locale]

    let theme = ''
    switch (activeTheme.id) {
      case 1:
        theme = primaryTheme
        break
      case 2:
        theme = secondaryTheme
        break
      default:
        break
    }

    return (
      <MuiThemeProvider theme={theme}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <Fragment>
            {children}
          </Fragment>
        </IntlProvider>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ settings }) => {
  return settings
}

export default connect(mapStateToProps)(RctThemeProvider)
