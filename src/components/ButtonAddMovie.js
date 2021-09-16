import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { resetForm } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ resetForm }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  resetForm: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
