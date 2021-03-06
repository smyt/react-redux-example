import React from 'react'
import PropTypes from 'prop-types'

const PositionBody = (props) => {

  return (
    <div className="requirements-body">
      <h4>Общее описание:</h4>
      <p>
        Мы разыскиваем серверных разработчиков уровня Middle и Senior, которые займут место в нашей
        профессиональной
        команде. У нас есть возможность поработать над любыми жанрами - синхронное PvP про роботов, про
        космические
        и парусные корабли, шутеры в различных сеттингах, VR и многое другое. Нам нужны как специалисты по
        игровым
        серверам, которые знают толк в оптимизации и ценят серверный трафик, так и спецы по бэкэндам, готовые
        идеально оптимизировать быстродействие баз данных и веб серверов, а также отмасштабировать серверную
        ферму
        под любую нагрузку.
      </p>
      <p>
        Мы готовы рассмотреть кандидатов из других индустрий.
        Возможно, вы сидите на нелюбимой работе, делая крутые высоконагруженные бэкэнды для чужих заказчиков для
        скучных банковских проектов, а по ночам плачете над любимым Playstation, горько сожалея о неправильно
        выбранной 10 лет назад индустрии? Мы даем вам возможность сделать практически безболезненный переход в
        мир
        геймдева из мира тлена и безысходности.
      </p>

      <h4>Описание обязанностей:</h4>

      <ul>
        <li>Разработка программного кода согласно утвержденному ТЗ</li>
        <li>Работа над крупными интернет и корпоративными проектами</li>
        <li>Участие в разработке корпоративных систем</li>
      </ul>

      <h4>Описание условий работы и бенефитов:</h4>

      <h5>Условия работы:</h5>
      <ul>
        <li>Мы гарантируем вам долгосрочное взаимовыгодное сотрудничество при условии что вы - профессионал
          своего дела). Занятость до 40 часов в неделю.
        </li>
        <li>Почасовая оплата (с ростом вашего профессионализма будет расти и ваша ставка)</li>
        <li>Вы сами выбираете время, удобное для продуктивной работы</li>
      </ul>

      <h5>Бенефиты:</h5>
      <ul>
        <li>Личное авто</li>
        <li>Личный вертолет</li>
        <li>Личный надсмотрщик</li>
      </ul>

      <h4>Описание отборочного цикла:</h4>
      <p>Мы расчитываем, что в течение 3 недель вы пройдете 7 кругов ада и выполните 70 тестовых заданий.</p>
      <h4>Важная информация для рекрутеров:</h4>
      <p>Не рассматриваются кандидаты с неполными данными, в том числе отсутствующее тестовое задание,
        отсутствующие ответы на вопросы и т.д.
      </p>

      <h2 className="screening-task-header">Задание для скрининга</h2>


    </div>
  )
}

PositionBody.defaultProps = {}

PositionBody.propTypes = {}

export default PositionBody
