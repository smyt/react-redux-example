/**
 * Description of RequirementsBlock.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 11.09.18 7:27
 */
import React from 'react'
import PropTypes from 'prop-types'
import Loading from 'Components/Loading/Loading'
import PositionHeader from './PositionHeader'
import PositionBody from './PositionBody'

const PositionView = ({ options, isLoading, onSuggestCandidate }) => {
  return (
    <Loading isLoading={isLoading}>
      <div className="requirements-block">
        <PositionHeader
          {...options}
          onSuggestCandidate={onSuggestCandidate}
        />
        <PositionBody {...options} />
      </div>
    </Loading>
  )
}

PositionView.defaultProps = {
  isLoading: false,
}

PositionView.propTypes = {
  position: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  onSuggestCandidate: PropTypes.func,
}

export default PositionView
