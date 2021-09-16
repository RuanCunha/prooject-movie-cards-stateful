import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddMovie from './ButtonAddMovie';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import Rating from './Rating';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handlerChange = this.handlerChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetForm = () => {
    const { onClick } = this.props;
    onClick({ ...this.state });
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handlerChange={ this.handlerChange } />
        <Subtitle value={ subtitle } handlerChange={ this.handlerChange } />
        <Image value={ imagePath } handlerChange={ this.handlerChange } />
        <Storyline value={ storyline } handlerChange={ this.handlerChange } />
        <Rating value={ rating } handlerChange={ this.handlerChange } />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ this.handlerChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <ButtonAddMovie resetForm={ this.resetForm } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
