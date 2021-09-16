import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, handlerChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ value }
          name="imagePath"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default Image;
