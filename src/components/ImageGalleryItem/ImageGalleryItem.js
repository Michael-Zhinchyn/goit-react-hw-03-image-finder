import React, { Component } from 'react';
import { StyledImageItem, StyledItemImg } from './ImageGalleryItem.styled';
import { ImageModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <StyledImageItem>
        <StyledItemImg onClick={this.openModal} src={webformatURL} alt={tags} />
        <ImageModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      </StyledImageItem>
    );
  }
}
