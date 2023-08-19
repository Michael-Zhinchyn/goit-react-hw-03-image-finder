import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledGalleryList } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <StyledGalleryList>
      {images.map(item => {
        return <ImageGalleryItem key={item.id} {...item} />;
      })}
    </StyledGalleryList>
  );
};
