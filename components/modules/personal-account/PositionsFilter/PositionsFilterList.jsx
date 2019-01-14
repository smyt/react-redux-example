/**
 * Description of PositionsFilterList.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 06.09.18 19:25
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToggleFilterButton from'./ToggleFilterButton'
import { connect } from 'react-redux'

// Redux actions
import {
  toggleFilterAction,
  selectFilterItem,
  deselectFilterItem,
  toggleFilterListAction,
  showMoreItemsAction,
} from 'Actions'

import PositionsFilterItem from './PositionsFilterItem'

class PositionsFilterList extends Component {
  renderFilters() {
    const me = this
    const {
      filters,
      toggleFilterAction,
      selectFilterItem,
      deselectFilterItem,
      showMoreItemsAction,
    } = me.props

    const items = filters.map(filter =>
      <PositionsFilterItem
        key={filter.name}
        {...filter}
        onCollapsed={toggleFilterAction}
        onSelectItem={selectFilterItem}
        onUnSelectItem={deselectFilterItem}
        onShowMore={showMoreItemsAction}
      />,
    )
    return (items)
  }

  render() {
    const me = this
    const { isCollapsed } = me.props
    return (
      <div className="positions-filter-wrapper">
        <div className="positions-filter-header clearfix">
          {!isCollapsed && <ToggleFilterButton />}
        </div>
        {!isCollapsed
        && (
          <div className="positions-filter-list">
            {me.renderFilters()}
          </div>
        )}
      </div>
    )
  }
}

PositionsFilterList.propTypes = {
  items: PropTypes.array,
  isCollapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
}

const mapStateToProps = ({ personalAccount }) => {
  const { isCollapsed, filters } = personalAccount.filters
  return { isCollapsed, filters }
}

export default connect(mapStateToProps, {
  toggleFilterAction,
  selectFilterItem,
  deselectFilterItem,
  toggleFilterListAction,
  showMoreItemsAction,
})(PositionsFilterList)
