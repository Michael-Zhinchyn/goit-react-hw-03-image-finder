import Modal from 'react-modal';
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
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

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
          <StyledModalImg src={largeImageURL} alt={tags}></StyledModalImg>
          <StyledItemBottomWrapper>
            <StyledImageTag>{tags}</StyledImageTag>
            <StyledCloseButton onClick={this.closeModal}>
              close
            </StyledCloseButton>
          </StyledItemBottomWrapper>
        </Modal>
      </StyledImageItem>
    );
  }
}
