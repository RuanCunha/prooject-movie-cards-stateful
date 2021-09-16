import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handlerChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ value }
          name="subtitle"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default Subtitle;
