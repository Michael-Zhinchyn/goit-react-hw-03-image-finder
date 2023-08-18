export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(item => {
        const { id, webformatURL, largeImageURL } = item;
        return (
          <li key={id}>
            <a href={largeImageURL}>
              <img src={webformatURL} alt=""></img>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
