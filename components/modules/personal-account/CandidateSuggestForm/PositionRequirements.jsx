/**
 * Description of PositionRequirements.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 20.09.18 11:50
 */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const PositionRequirements = ({ title, items, ...props }) => {
  return (
    <Fragment>
      <h2 className="ta-c font-weight-bold">{title}</h2>
      <div className="summary-requirements-block">
        <p>
          1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
          laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
          sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus sapien nunc eget odio.
        </p>
        <p>
          2) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
          laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
          sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus sapien nunc eget odio.
        </p>
        <p>
          3) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
          laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
          mollis orci, sed rhoncus sapien nunc eget odio.
        </p>
        <p>
          4) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
          laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
        </p>

        <div className="ta-r">
          <Button className="mr-10 mb-10 text-uppercase text-underline" color="link">
            Дальше...
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

PositionRequirements.propTypes = {
  title: PropTypes.string.isRequred,
  items: PropTypes.array,
}

export default PositionRequirements
