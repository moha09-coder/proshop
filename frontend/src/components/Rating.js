import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  return (
    <div className='my-3'>
      {[1, 2, 3, 4, 5].map((i) => (
        <i
          style={{ color }}
          className={
            value >= i
              ? 'fas fa-star'
              : value >= i - 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      ))}
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#fdcc0d',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
