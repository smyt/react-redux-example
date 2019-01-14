/**
 * Description of CandidateSuggestForm.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 13.09.18 21:17
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import PhoneInput from 'Components/FormItems/PhoneInput'
import { connect } from 'react-redux'

import {
  getVisibleSuggestion,
} from 'Selectors/personal-account'

import { reduxForm } from 'redux-form'
import {
  BaseInputField,
  BaseArrayField,
  BaseSelectField,
  BaseCheckboxField,
  BaseCheckboxGroupField,
} from 'Components/FormItems/BaseFields'

import StackList from './StackList'
import PositionRequirements from './PositionRequirements'

import { checkObjectPropsTrueFalse } from 'Util/helpers'

const validate = (values) => {
  const errors = {}
  const requiredFields = [
    'firstname',
    'lastname',
    'position',
    'citizenship',
    'approval',
    'education',
    'activity',
    'englishLevel',
  ]

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Обязательное поле'
    }
  })

  errors.workTime = !checkObjectPropsTrueFalse(values.workTime) ? 'Обязательное поле' : ''
  errors.workPlace = !checkObjectPropsTrueFalse(values.workPlace) ? 'Обязательное поле' : ''
  return errors
}

class CandidateSuggestForm extends Component {
  doSave = (data) => {
  }

  renderForm() {
    const me = this

    const {
      education,
      englishLevel,
    } = me.props

    const activity = [{
      id: 1,
      label: 'Активный поиск',
    }, {
      id: 2,
      label: 'Рассматривает вакансии',
    }]

    const workTime = [{
      name: 'full',
      label: 'Полный день',
    }, {
      name: 'flex',
      label: 'Гибкий график',
    }, {
      name: 'project',
      label: 'Проектная работа',
    }]

    const workPlace = [{
      name: 'remote',
      label: 'Удаленная работа',
    }, {
      name: 'office',
      label: 'Офис',
    }]

    return (
      <form noValidate autoComplete="off">

        <div className="row align-items-start">
          <div className="col-12 col-md-8">
            <div className="row align-items-start">
              <div className="col-12 col-md-6">
                <BaseInputField label="Фамилия:" name="firstname" required />
                <BaseInputField label="Имя:" name="lastname" required />
                <BaseInputField label="Отчество:" name="patronymic" />
              </div>
              <div className="col-12 col-md-6">
                <BaseArrayField label="Контактный телефон:"
                                name="phones"
                                required
                                fullWidth
                                fieldcomponent={PhoneInput}
                />
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-12 col-md-6">
                <BaseSelectField label="Активность:" name="activity" items={activity} required />
                <BaseInputField label="Должность:" name="position" required />
              </div>
              <div className="col-12 col-md-6">
                <BaseArrayField label="Email:" name="emails" required fullWidth />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <BaseSelectField
                  label="Уровень английского языка:"
                  name="englishLevel"
                  items={englishLevel}
                  labelField="name"
                  required
                />
                <BaseInputField label="Гражданство:" name="citizenship" required />
                <BaseInputField label="Разрешение на работу:" name="approval" required />
                <BaseSelectField
                  label="Образование:"
                  name="education"
                  items={education}
                  labelField="name"
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <BaseInputField label="Skype:" name="skype" required />
                <BaseInputField label="Telegram:" name="telegram" required />
                <BaseInputField label="Ожидания по зарплате:" name="amount" />
                <BaseCheckboxField label="IT образование" name="withIT" />
              </div>

            </div>
          </div>
          <div className="col-12 col-md-4">
            <PositionRequirements title="Требования к вакансии" />
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-12 col-md-8">
            <div className="row">
              <StackList
                title="Стек ключевых технологий"
                name="stack"
                expItems={me.props.experience}
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h5>Файлы резюме</h5>
            <Button
              classes={{ contained: 'indigo-contained-btn' }}
              className="mr-5"
              variant="contained"
              onClick={() => {}}
            >
              Загрузить резюме
            </Button>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-12 col-md-8">
            <BaseInputField
              label="Общее описание канидата:"
              name="aboutDesc"
              multiline
              rows="10"
              rowsMax="10"
            />
          </div>
          <div className="col-12 col-md-4">
            <BaseArrayField label="Сфера интересов:" name="interests" fullWidth />
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-12 col-md-8">
            <BaseInputField
              label="Описание опыта работы в хронологическом порядке, начиная с текущего места работы:"
              name="experienceDesc"
              multiline
              rows="10"
              rowsMax="10"
              required
            />
          </div>
          <div className="col-12 col-md-4">
            <BaseCheckboxGroupField
              name="workTime"
              legend="Желаемый график работы"
              inline={true}
              required
              items={workTime}
            />
            <h5>Желаемое рабочее место:</h5>
            <BaseCheckboxGroupField
              name="workPlace"
              legend="Рабочее место"
              inline={true}
              required
              items={workPlace}
            />
          </div>
        </div>
      </form>
    )
  }

  renderButtons() {
    const me = this
    const {
      onCancel,
      onMinimize,
      handleSubmit,
    } = me.props
    return (
      <div className="candidate-suggest-form-buttons">
        <Button
          classes={{ contained: 'indigo-contained-btn' }}
          className="mr-5"
          variant="contained"
          onClick={handleSubmit(me.doSave)}
        >
          Сохранить
        </Button>
        <Button
          variant="contained"
          onClick={onCancel}
        >
          Отмена
        </Button>
        <Tooltip title="Свернуть" placement="top">
          <Button
            className="pull-right"
            onClick={onMinimize}
          >
            <i className="icon-arrow-down" />
          </Button>
        </Tooltip>
      </div>
    )
  }

  render() {
    const me = this
    return (
      <div className="candidate-suggest-form-main">
        {me.renderButtons()}
        {me.renderForm()}
      </div>
    )
  }
}

CandidateSuggestForm.defaultProps = {}

CandidateSuggestForm.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onMinimize: PropTypes.func,
}

const InitializeForm = reduxForm({
  form: 'suggestForm',
  validate,
})(CandidateSuggestForm)

const mapStateToProps = (state) => {
  const {
    experience,
    englishLevel,
    priorities,
    technologies,
    education,
  } = state.dictionaries

  return {
    initialValues: getVisibleSuggestion(state),
    experience,
    englishLevel,
    priorities,
    technologies,
    education,
  }
}

export default connect(mapStateToProps)(InitializeForm)
