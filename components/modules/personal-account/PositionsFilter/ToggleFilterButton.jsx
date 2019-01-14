/**
 * Description of ToggleFilterButton.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 26.09.18 19:20
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Tooltip from '@material-ui/core/Tooltip'
import { connect } from 'react-redux'
import { toggleFilterListAction } from 'Actions'

class ToggleFilterButton extends Component {
  render() {
    const me = this
    const { toggleFilterListAction, isCollapsed } = me.props
    const style = { width: '100%' }
    return (
      <Tooltip title={isCollapsed ? 'Развернуть фильтр' : 'Свернуть фильтр'}>
        <Button
          style={!isCollapsed ? style : {}}
          onClick={e => toggleFilterListAction(isCollapsed)}
        >
          {!isCollapsed ? <ArrowDropUp /> : <ArrowDropDown />}
        </Button>
      </Tooltip>
    )
  }
}

ToggleFilterButton.propTypes = {
  isCollapsed: PropTypes.bool,
  toggleFilterListAction: PropTypes.func,
}

const mapStateToProps = ({ personalAccount: { filters: { isCollapsed } } }) => {
  return { isCollapsed }
}

export default connect(mapStateToProps, { toggleFilterListAction })(ToggleFilterButton)
