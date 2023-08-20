import React, { Component } from 'react';
import Modal from 'react-modal';
import { Loader } from 'components/Loader/Loader';
import {
  StyledModalImg,
  StyledItemBottomWrapper,
  StyledImageTag,
  StyledCloseButton,
} from './Modal.styled';

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

export class ImageModal extends Component {
  state = {
    imageLoaded: false,
  };

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && !prevProps.isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!this.props.isOpen && prevProps.isOpen) {
      document.body.style.overflow = 'auto';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const { isOpen, onRequestClose, tags, largeImageURL } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <StyledModalImg
          src={largeImageURL}
          alt={tags}
          onLoad={this.handleImageLoad}
        />
        {!this.state.imageLoaded && <Loader />}
        {this.state.imageLoaded && (
          <StyledItemBottomWrapper>
            <StyledImageTag>{tags}</StyledImageTag>
            <StyledCloseButton onClick={onRequestClose}>
              close
            </StyledCloseButton>
          </StyledItemBottomWrapper>
        )}
      </Modal>
    );
  }
}
