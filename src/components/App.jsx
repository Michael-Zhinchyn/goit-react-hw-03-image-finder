import React, { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

  // changeQuery = () => {};
  // setImages = () => {};

  render() {
    return (
      <div>
        <SearchBar />
        <ImageGallery />
        <LoadMoreBtn />
        <GlobalStyle />
      </div>
    );
  }
}
