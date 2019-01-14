/**
 * Signin Firebase
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress'
import LoginForm from 'Modules/auth/LoginForm'
import SocialIcons from 'Components/SocialIcons'

import { loginAction } from 'Actions'

class LoginPage extends Component {
  doLoginAction = (email, password) => {
    const me = this
    const { dispatch, login } = me.props
    dispatch(login(email, password))
  }

  render() {
    const me = this
    const { loading } = me.props
    const socialItems = [{
      href: 'http://facebook.com',
      icon: 'icon-social-facebook',
    }, {
      href: 'http://twitter.com',
      icon: 'icon-social-twitter',
    }, {
      href: 'http://yandex.ru',
      icon: 'icon-social-linkedin',
    }]

    return (
      <div className="rct-session-wrapper">
        {loading && <LinearProgress />}

        <div className="login-page">
          <div className="login-page__about-block">
            <div className="logo">
              <div className="logo-image">
                <img className="img-fluid" src={require('Assets/img/login-page-logo.png')} alt="login-page-logo" />
              </div>
              <div className="logo-text">
                <h4>Advanced recruiting tools to automate your hiring process (beta version)</h4>
              </div>
            </div>
            <div className="social">
              <SocialIcons items={socialItems} />
              <div className="copyright">
                <span>2018, SmytSoft Group</span>
              </div>
            </div>
          </div>

          <div className="login-page__login-block">
            <div className="language">
              <p>LANGUAGE</p>
            </div>
            <div className="login-form">
              <LoginForm
                isLoading={loading}
                onSubmit={me.doLoginAction}
              />
            </div>
            <div className="contacts">
              <span>
                <a href="http://yandex.ru">Contact us</a>
                to try Talent Scout Ecosystem for free
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { user, loading } = auth
  return { user, loading }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    login: loginAction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
