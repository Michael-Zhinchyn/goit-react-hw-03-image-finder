import React, { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/LoadMoreBtn';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './API';
import { Logo } from './Logo/Logo';
import { Loader } from './Loader/Loader';
import { ScrollToTopBtn } from './ScrollToTop/ScrollToTop';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    hasMoreImages: true,
    showScrollBtn: false,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
      hasMoreImages: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollPosition);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, images } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.loadImages();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition);
  }

  checkScrollPosition = () => {
    if (window.pageYOffset > 1000 && !this.state.showScrollBtn) {
      this.setState({ showScrollBtn: true });
    } else if (window.pageYOffset <= 1000 && this.state.showScrollBtn) {
      this.setState({ showScrollBtn: false });
    }
  };

  // Separated loading logic into its own function
  loadImages = async () => {
    const { query, page } = this.state;
    const actualQuery = query.split('/');
    this.setState({ isLoading: true });

    const newImages = await getImages({
      query: actualQuery[1],
      page,
    });

    if (newImages.length < 20) {
      this.setState({ hasMoreImages: false });
    }

    const updatedImages = this.state.images.concat(newImages);
    this.setState({ images: updatedImages, isLoading: false });
  };

  render() {
    const { images, hasMoreImages, isLoading, showScrollBtn } = this.state;

    return (
      <div>
        <Logo />
        <SearchBar onSubmit={this.changeQuery} />
        <ImageGallery images={images} />

        {images.length > 0 && hasMoreImages && (
          <LoadMoreBtn onClick={this.handleLoadMore} />
        )}

        {isLoading && <Loader />}

        {showScrollBtn && (
          <ScrollToTopBtn
            style={{ position: 'fixed', bottom: '10px', right: '10px' }}
          />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
