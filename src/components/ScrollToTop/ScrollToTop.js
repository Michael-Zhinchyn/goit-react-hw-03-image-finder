import { BsArrowUp } from 'react-icons/bs';
import { StyledToTopBtn } from './ScrollToTop.styled';
export const ScrollToTopBtn = ({ style }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledToTopBtn onClick={handleScrollToTop} style={style}>
      <BsArrowUp size={40} color="rgb(20 158 202)" />
    </StyledToTopBtn>
  );
};
