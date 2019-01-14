/**
 * Description of PositionItem.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 15:59
 */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const PositionItem = (props) => {
  const {
    id,
    title,
    endDate,
    amount,
    places,
    technologies,
    text,
    priority,
    candidatesCount,
    isActive,
    onShowStatus,
    onReadRequirements,
  } = props
  const placesStr = ['Удаленная работа', 'Москва', 'Санкт-Перербург', 'Самара']

  return (
    <div className="position-item">
      <div className="row">
        <div className="col-12 col-md-9">

          <div className="position-main-info">

            <div className="position-block">
              <div className="position-sub">
                <h2 className="left-column-info fw-bold">{title}</h2>
                <span className="right-column-info fw-bold">{amount}</span>
                <span className="right-column-info font-sm">
                  ID вакансии:
                  {id}
                </span>
              </div>
              <div className="position-sub">
                <span className="left-column-info font-sm fw-bold">{placesStr.join(', ')}</span>
                <span className="right-column-info font-sm fw-bold">
                  Дедлайн:
                  {endDate}
                </span>
              </div>
            </div>

            <hr />

            <div className="position-block">
              <div className="position-sub">
                <p className="font-sm">
                  <strong>Основной стек: </strong>{placesStr.join(', ')}
                </p>
              </div>
              <div className="position-sub">
                <p className="font-xs">
                  <strong>Общее описание: </strong>{text}
                </p>
              </div>
              <div className="position-sub">
                <span className="left-column-info fw-bold">
                  Приоритет:
                  {priority}
                </span>
                <span className="right-column-info">
                  <Button className="read-more font-xs" onClick={e => onReadRequirements(id, title)}>
                    Читать требования
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3'>
          <div className="position-additional-info">
            <div className="about-block">
              <h5>{isActive ? 'Вакансия открыта' : 'Вакансия закрыта'}</h5>
              <h5>Предложено кандидатов: {candidatesCount}</h5>
            </div>
            <div className="link-block">
              <ul className="links">
                {
                  candidatesCount > 0 && <li><a href="#" onClick={onShowStatus}>Смотреть статусы</a></li>
                }
                <li><a href="#">Скачать требования PDF</a></li>
                <li><a href="#">Скачать задания для скрининга PDF</a></li>
              </ul>
              <Button
                className="suggest-candidate"
                size="small"
                color="default"
                variant="contained"
                component={Link}
                to={`suggest-candidate/${id}`}
              >
                Предложить кандидата
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PositionItem.defaultProps = {
  places: [],
  technologies: [],
}

PositionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.number),
  technologies: PropTypes.arrayOf(PropTypes.number),
  text: PropTypes.string,
  priority: PropTypes.number,
  candidatesCount: PropTypes.number,
  isActive: PropTypes.bool,
  onShowStatus: PropTypes.func,
  onReadRequirements: PropTypes.func,
}

export default PositionItem
