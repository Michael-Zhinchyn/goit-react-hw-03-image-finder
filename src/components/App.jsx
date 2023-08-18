import React, { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './API';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const actualQuery = this.state.query.split('/');
      const images = await getImages({
        query: actualQuery[1],
        page: this.state.page,
      });
      this.setState({ images });
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        <LoadMoreBtn onClick={this.handleLoadMore} />
        <GlobalStyle />
      </div>
    );
  }
}
