/**
 * Description of SortingOrder.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 07.09.18 14:30
 */

import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const SortingOrder = ({
  id, name, items, defaultValue, onChange, ...props
}) => {
  const options = items.map(
    item => <MenuItem key={`option-${item.value}`} value={item.value}>{item.name}</MenuItem>,
  )

  return (
    <Select
      className="sorting-order-select"
      {...props}
      value={defaultValue}
      onChange={onChange}
      inputProps={{
        id,
        name,
      }}
    >
      {options}
    </Select>
  )
}

SortingOrder.defaultProps = {
  id: 'sorting-select',
  name: 'sorting-select',
  defaultValue: '',
}

SortingOrder.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
}

export default SortingOrder
