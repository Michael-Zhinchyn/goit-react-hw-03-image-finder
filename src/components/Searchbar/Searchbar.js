import React, { Component } from 'react';
import {
  StyledSearchInput,
  StyledSearchBtn,
  StyledSearchForm,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <header>
          <StyledSearchForm>
            <StyledSearchInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images..."
            />
            <StyledSearchBtn type="submit">Search</StyledSearchBtn>
          </StyledSearchForm>
        </header>
      </div>
    );
  }
}
