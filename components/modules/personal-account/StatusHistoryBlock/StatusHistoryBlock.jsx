/**
 * Description of StatusHistoryBlock.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 11.09.18 7:27
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'

const StatusHistoryBlock = (props) => {
  const {
    date,
    oldStatus,
    newStatus,
    comment,
  } = props

  function getTable() {
    return (
      <Table borderless="true">
        <thead>
          <tr>
            <th>Дата и время:</th>
            <th>Старый статус:</th>
            <th>Новый статус:</th>
          </tr>
        </thead>
        <tbody>
          <tr key={1}>
            <td>{date}</td>
            <td>{oldStatus}</td>
            <td>{newStatus}</td>
          </tr>
        </tbody>
      </Table>
    )
  }

  return (
    <div className="base-rs-table">
      {getTable()}
      <div className="m-10">
        <h4 className="font-weight-bold">Комментарий к статусу:</h4>
        <p className="font-sm">{comment}</p>
      </div>
    </div>
  )
}

StatusHistoryBlock.propTypes = {
  date: PropTypes.string.isRequired,
  oldStatus: PropTypes.string.isRequired,
  newStatus: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

export default StatusHistoryBlock
