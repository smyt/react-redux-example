/**
 * Description of PositionsList.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 07.09.18 15:14
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WidePagination from 'Components/WidePagination/WidePagination'
import Loading from 'Components/Loading/Loading'

// Redux actions
import {
  changePositionsListPageAction,
  changePositionsItemsPerPageAction,
} from 'Actions'

import PositionItem from './PositionItem'

class PositionsList extends Component {
  onChangeItemsPerPage = (e) => {
    this.props.changePositionsItemsPerPageAction(e.target.value)
  }

  onShowStatus = (e, item) => {
    e.preventDefault()
    this.props.onShowStatus(item.id, item.title)
  }

  renderPagination() {
    const me = this
    const {
      items,
      currentPage,
      totalItems,
      itemsPerPage,
      changePositionsListPageAction,
    } = me.props
    const totalPage = Math.ceil(totalItems / itemsPerPage)

    return (items.length > 0
      && (
        <WidePagination
          currentPage={currentPage}
          defaultValue={itemsPerPage}
          totalPages={totalPage}
          onChange={changePositionsListPageAction}
          onChangeItemPerPage={me.onChangeItemsPerPage}
        />
      )
    )
  }

  renderItems() {
    const me = this
    const {
      items,
      onReadRequirements,
    } = me.props

    const list = items.map((item) => {
      return (
        <PositionItem
          key={item.id}
          {...item}
          onShowStatus={e => me.onShowStatus(e, item)}
          onReadRequirements={onReadRequirements}
        />
      )
    })

    return (list)
  }

  render() {
    const me = this
    const { isLoading } = me.props
    return (
      <div className="positions-list">
        <div className="position-pagination">
          {me.renderPagination()}
        </div>
        <div className="positions-items">
          <Loading
            isLoading={isLoading}
            color="#fefefe"
          >
            {me.renderItems()}
          </Loading>
        </div>
        <div className="position-pagination">
          {me.renderPagination()}
        </div>
      </div>
    )
  }
}

PositionsList.defaulProps = {
  items: [],
  isLoading: false,
  currentPage: 1,
  totalItems: 0,
  itemsPerPage: 5,
}

PositionsList.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onShowStatus: PropTypes.func,
  onReadRequirements: PropTypes.func,
}

const mapStateToProps = ({ personalAccount }) => {
  const { currentPage, totalItems, itemsPerPage, isLoading, items } = personalAccount.positions
  return { currentPage, totalItems, itemsPerPage, isLoading, items }
}

export default connect(mapStateToProps, {
  changePositionsListPageAction,
  changePositionsItemsPerPageAction,
})(PositionsList)
