import React, { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/LoadMoreBtn';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './API';
import { Logo } from './Logo/Logo';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
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
      this.setState({ isLoading: true });

      const newImages = await getImages({
        query: actualQuery[1],
        page: this.state.page,
      });

      const updatedImages = this.state.images.concat(newImages);
      this.setState({ images: updatedImages, isLoading: false });
    }
  }

  render() {
    return (
      <div>
        <Logo />
        <SearchBar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && (
          <LoadMoreBtn onClick={this.handleLoadMore} />
        )}
        {this.state.isLoading && <Loader />}

        <GlobalStyle />
      </div>
    );
  }
}
