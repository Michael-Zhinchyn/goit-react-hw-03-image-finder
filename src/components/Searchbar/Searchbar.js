import { Component } from 'react';
import {
  StyledSearchInput,
  StyledSearchBtn,
  StyledSearchForm,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.query.trim() === '') {
      alert('на жаль Ви нічого не ввели для пошуку ');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleInputChange = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <div>
        <header>
          <StyledSearchForm onSubmit={this.handleSubmit}>
            <StyledSearchInput
              onChange={this.handleInputChange}
              value={this.state.query}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images..."
            />
            <StyledSearchBtn>Submit</StyledSearchBtn>
          </StyledSearchForm>
        </header>
      </div>
    );
  }
}
