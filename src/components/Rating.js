import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, handlerChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          name="rating"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default Rating;
