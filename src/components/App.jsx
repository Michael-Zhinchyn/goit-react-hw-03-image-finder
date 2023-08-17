import React, { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/Button';

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <SearchBar />
        <LoadMoreBtn />
        <GlobalStyle />
      </div>
    );
  }
}
