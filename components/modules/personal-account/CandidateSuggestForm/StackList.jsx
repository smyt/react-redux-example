/**
 * Description of StackList.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 20.09.18 11:50
 */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import { FieldArray } from 'redux-form'
import { BaseInputField, BaseSelectField } from 'Components/FormItems/BaseFields'

const renderStackList = ({ fields, meta: { error, submitFailed }, ...custom }) => {
  const expItems = custom.expItems || []

  function doAddField() {
    fields.push({ technology: '', experience: 1 })
  }

  function doRemoveField(e, index) {
    fields.remove(index)
  }

  const items = fields.map((member, index) => {
    const labels = ['', '']
    let onAction
    let icon

    if (index === 0) {
      labels[0] = 'Язык, библиотека, фрейморк, база данных и т.п.:'
      labels[1] = 'Сведения об опыте использования: *'
      onAction = e => doAddField(e)
      icon = 'add_circle'
    } else {
      onAction = e => doRemoveField(e, index)
      icon = 'delete_circle'
    }

    return (
      <Fragment>
        <div className="col-12 col-md-6">
          <BaseInputField
            label={labels[0]}
            name={`${member}.technology`}
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <BaseSelectField
            label={labels[1]}
            name={`${member}.experience`}
            items={expItems}
            labelField="name"
          />
          <Icon className="icon-button" fontSize="small" onClick={onAction}>{icon}</Icon>
        </div>
      </Fragment>
    )
  })

  return items
}

const StackList = ({ title, name, ...props }) => {
  return (
    <Fragment>
      <div className="col-12">
        <h5 className="m-5">{title}</h5>
      </div>
      <FieldArray name={name} component={renderStackList} {...props} />
    </Fragment>
  )
}

StackList.propTypes = {
  title: PropTypes.string.isRequred,
  name: PropTypes.string.isRequred,
  expItems: PropTypes.array.isRequred,
}

export default StackList
