/**
 * Description of RequirementsHeader.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 11.09.18 7:27
 */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const PositionHeader = (props) => {
  const {
    id,
    title,
    amount,
    places,
    endDate,
    workTime,
    vacancyHref,
    payedRelocation,
    employeeCount,
    probationPeriod,
    englishLevel,
    educationLevel,
    priority,
    citizenship,
    approval,
    onSuggestCandidate,
  } = props

  return (
    <div className="requirements-header">

      <div className="row">
        <div className="col-12 col-sm-6">
          <h2>Django/Python developer middle</h2>
        </div>
        <div className="col-12 col-sm-6">
          <h2 className="block-different-align">от 2500$</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <p className="font-weight-bold">Удаленная работа, Москва, Санкт-Петербург, Самара</p>
        </div>
        <div className="col-12 col-sm-6">
          <p className="font-weight-bold block-different-align">ID вакансии: 3642</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <p><strong>График работы: </strong>Полная занятость, Гибкий график, Проектная работа</p>
        </div>
        <div className="col-12 col-sm-6">
          <p className="block-different-align"><strong>Дедлайн:</strong>31.07.2018</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <p><strong>Оплачиваемая релокация: </strong>Нет</p>
        </div>
        <div className="col-12 col-sm-6">
          <a href="http://smyttalents.ru/vacancies/145" target="_blank" className="block-different-align">
            smyttalents.ru/vacancies/145
          </a>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-12 col-sm-6">
          <p><strong>Требуются 2 человека</strong></p>
        </div>
        <div className="col-12 col-sm-6">
          <p><strong>Приоритет: </strong>Вакансия с низким приоритетом</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <p><strong>Длительность испытательного срока: </strong>Без испытательного срока</p>
        </div>
        <div className="col-12 col-sm-6">
          <p><strong>Гражданство*: </strong>Россия, Украина</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <p><strong>Требования к уровню английского языка: </strong>Не ниже advanced</p>
        </div>
        <div className="col-12 col-sm-6">
          <p><strong>Разрешение на работу*: </strong>США</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p><strong>Требования к образованию: </strong>Оконченное высшее IT</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6">
          <a href="http://smyttalents.ru/vacancies/145" target="_blank">
            Скачать требования к вакансии в формате PDF
          </a>
        </div>
        <div className="col-12 col-sm-6">
          <Button
            classes={{ contained: 'indigo-contained-btn' }}
            variant="contained"
            onClick={onSuggestCandidate}
            component={Link}
            to={'suggest-candidate/1'}
          >
            Предложить кандидата
          </Button>
        </div>
      </div>
    </div>
  )
}

PositionHeader.defaultProps = {
  places: [],
  workTime: [],
  employeeCount: 1,
  probationPeriod: 'Без испытательного срока',
  citizenship: [],
  approval: [],
}

PositionHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  places: PropTypes.array.isRequired,
  endDate: PropTypes.string.isRequired,
  workTime: PropTypes.array,
  vacancyHref: PropTypes.string.isRequired,
  payedRelocation: PropTypes.bool.isRequired,
  employeeCount: PropTypes.number,
  probationPeriod: PropTypes.string,
  englishLevel: PropTypes.number,
  educationLevel: PropTypes.number,
  priority: PropTypes.number,
  citizenship: PropTypes.array,
  approval: PropTypes.array,
  onSuggestCandidate: PropTypes.func,
}

export default PositionHeader
