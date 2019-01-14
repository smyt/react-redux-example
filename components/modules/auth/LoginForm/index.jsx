/**
 * Description of index.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 23.10.18 13:59
 */
import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import Loading from 'Components/Loading/Loading'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'

import {
  BaseInputField,
  BaseArrayField,
  BaseSelectField,
  BaseCheckboxField,
  BaseCheckboxGroupField,
} from 'Components/FormItems/BaseFields'

const validate = (values) => {
  const errors = {}
  const requiredFields = [
    'email',
    'password',
  ]

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required!'
    }
  })

  return errors
}

const LoginForm = (props) => {

  const {
    isLoading,
    handleSubmit,
    onSubmit,
    anyTouched,
    valid,
  } = props

  const doLoginAction = (data) => {
    const { email, password } = data
    onSubmit(email, password)
  }

  return (
    <div className="user-login-form">
      <h1 className="ta-c">
        Lets get started
      </h1>
      <form noValidate autoComplete="off">
        <div className="row">
          <div className="col-12">
            <BaseInputField label="EMAIL:" name="email" disabled={isLoading} />
          </div>
          <div className="col-12">
            <BaseInputField label="PASSWORD:" name="password" disabled={isLoading} />
          </div>
          <div className="col-12">
            <Button
              className={classNames('login-button', 'indigo-contained-btn', 'pull-right')}
              variant="contained"
              onClick={handleSubmit(doLoginAction)}
              disabled={!anyTouched || !valid || isLoading}
            >
              Log In
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

LoginForm.defaultProps = {
  isLoading: false,
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
}

const InitializeForm = reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm)

export default connect(null)(InitializeForm)
