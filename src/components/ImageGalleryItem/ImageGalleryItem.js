import Modal from 'react-modal';
import { Loader } from 'components/Loader/Loader';
import {
  StyledImageItem,
  StyledItemBottomWrapper,
  StyledModalImg,
  StyledCloseButton,
  StyledImageTag,
  StyledItemImg,
} from './ImageGalleryItem.styled';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    maxWidth: '90vw',
    maxHeight: '80vh',
    overflow: 'hidden',
    background: 'transparent',
  },
  overlay: {
    backgroundColor: '#23272f',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    imageLoaded: false,
  };

  openModal = () => this.setState({ isModalOpen: true, imageLoaded: false });
  closeModal = () => this.setState({ isModalOpen: false, imageLoaded: false });
  handleImageLoad = () => this.setState({ imageLoaded: true });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <StyledImageItem>
        <StyledItemImg
          onClick={this.openModal}
          src={webformatURL}
          alt={tags}
        ></StyledItemImg>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <StyledModalImg
            src={largeImageURL}
            alt={tags}
            onLoad={this.handleImageLoad}
          ></StyledModalImg>
          {!this.state.imageLoaded && <Loader />}
          {this.state.imageLoaded && (
            <StyledItemBottomWrapper>
              <StyledImageTag>{tags}</StyledImageTag>
              <StyledCloseButton onClick={this.closeModal}>
                close
              </StyledCloseButton>
            </StyledItemBottomWrapper>
          )}
        </Modal>
      </StyledImageItem>
    );
  }
}
