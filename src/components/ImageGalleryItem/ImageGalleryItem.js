import Modal from 'react-modal';
import {
  StyledImageItem,
  StyledItemBottomWrapper,
} from './StyledGalleryItem.styled';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    maxWidth: '90vw',
    maxHeight: '80vh',
    overflow: 'auto',
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
        <img onClick={this.openModal} src={webformatURL} alt={tags}></img>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImageURL} alt={tags}></img>
          <StyledItemBottomWrapper>
            <p>{tags}</p>
            <button onClick={this.closeModal}>close</button>
          </StyledItemBottomWrapper>
        </Modal>
      </StyledImageItem>
    );
  }
}
