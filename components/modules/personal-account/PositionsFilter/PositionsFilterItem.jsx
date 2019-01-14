/**
 * Description of PositionsFilter.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 06.09.18 19:25
 */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import { Button } from 'reactstrap'
import classnames from 'classnames'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const getMuiTheme = () => createMuiTheme({
  overrides: {
    MuiList: {
      padding: {
        paddingTop: 0,
      },
    },
    MuiTypography: {
      subheading: {
        fontFamily: 'Arial',
        fontSize: '0.85rem',
      },
    },
    MuiListItem: {
      ['default']: {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      },
    },
    MuiListItemText: {
      root: {
        paddingLeft: '0.5rem',
      },
    },
    MuiIconButton: {
      root: {
        fontSize: '0.85rem',
        height: 24,
        width: 24,
        marginRight: 12,
      },
    },
  },
})

class PositionsFilterItem extends Component {
  renderItemsList() {
    const me = this
    const {
      name, showAll, items, maxVisibleItemsCount, onSelectItem, onUnSelectItem, selected,
    } = me.props
    const visibleItems = !showAll && items.length > maxVisibleItemsCount
      ? items.slice(0, maxVisibleItemsCount)
      : items

    const selectedStyle = {
      backgroundColor: '#eee',
    }

    const filterPoints = visibleItems.map((item) => {
      const isSelected = selected.indexOf(item.id) !== -1
      return (
        <ListItem
          key={`list-item-${item.id}`}
          button
          style={isSelected ? selectedStyle : null}
          onClick={() => onSelectItem(name, item)}
        >
          <ListItemText primary={item.name} />
          {isSelected && (
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => onUnSelectItem(name, item)}>
                <i className="zmdi zmdi-close text-secondary" />
              </IconButton>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      )
    })

    return (
      <List key={`item-collapse${name}`}>
        {filterPoints}
      </List>
    )
  }

  renderMoreItemsButton() {
    const me = this
    const {
      items, name, showAll, maxVisibleItemsCount, isCollapsed, onShowMore,
    } = me.props
    const invisibleItemsCount = items.length > maxVisibleItemsCount
      ? items.length - maxVisibleItemsCount
      : 0

    return (
      <Fragment>
        {!isCollapsed && invisibleItemsCount > 0 && !showAll
        && (
          <div className="filter-show-all">
            <Button color="link" onClick={() => onShowMore(name)}>
              Еще
              {invisibleItemsCount}
            </Button>
          </div>
        )
        }
      </Fragment>
    )
  }

  render() {
    const me = this
    const {
      name, title, isCollapsed, onCollapsed,
    } = me.props
    return (
      <div>
        <MuiThemeProvider theme={getMuiTheme()}>
          <List>
            <ListItem key={`item-${name}`} button onClick={() => onCollapsed(name)}>
              <ListItemText className="filter-item-header" primary={title} />
              <i
                className={classnames('zmdi zmdi-hc-lg', isCollapsed ? 'zmdi-chevron-down' : 'zmdi-chevron-up')}
              />
            </ListItem>
            <Collapse component="li" in={!isCollapsed} timeout="auto" unmountOnExit>
              {me.renderItemsList()}
            </Collapse>
          </List>
          {me.renderMoreItemsButton()}
        </MuiThemeProvider>
      </div>
    )
  }
}

PositionsFilterItem.defaultProps = {
  maxVisibleItemsCount: 3,
  invisibleText: 'Еще {count}',
}

PositionsFilterItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  isCollapsed: PropTypes.bool,
  showAll: PropTypes.bool,
  maxVisibleItemsCount: PropTypes.number,
  invisibleText: PropTypes.string,
  items: PropTypes.array,
  selected: PropTypes.array,
  onCollapsed: PropTypes.func,
  onSelectItem: PropTypes.func,
  onUnSelectItem: PropTypes.func,
  onShowMore: PropTypes.func,
}

export default PositionsFilterItem
