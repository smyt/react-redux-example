/**
 * Description of StatusesTable.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 11.09.18 7:27
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'reactstrap'
import Loading from 'Components/Loading/Loading'

const StatusesTable = (props) => {
  const {
    data,
    isLoading,
    onRead,
    onAction,
  } = props

  function getRows() {
    return data.map(item => (
      <tr key={item.id}>
        <td>{item.fio}</td>
        <td>{item.status}</td>
        <td>
          {item.comment.length > 0 ? <Button color="link" onClick={onRead}>Читать</Button> : ''}
        </td>
        <td>
          {item.action > 1 ? <Button color="link" onClick={onAction}>Обновить резюме</Button> : ''}
        </td>
      </tr>
    ))
  }

  function getTable() {
    return (
      <Table borderless="true">
        <thead>
          <tr>
            <th>Фамилия Имя Отчество</th>
            <th>Статус</th>
            <th>Комментарий</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {getRows()}
        </tbody>
      </Table>
    )
  }

  return (
    <Loading isLoading={isLoading}>
      <div className="base-rs-table">
        {getTable()}
      </div>
    </Loading>
  )
}

StatusesTable.defaultProps = {
  data: [],
  isLoading: true,
}

StatusesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    fio: PropTypes.string,
    status: PropTypes.string,
    action: PropTypes.number,
  })),
  isLoading: PropTypes.bool,
  onRead: PropTypes.func,
  onAction: PropTypes.func,
}

export default StatusesTable
