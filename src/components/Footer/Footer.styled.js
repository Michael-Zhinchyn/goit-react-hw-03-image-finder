import styled, { keyframes } from 'styled-components';
import { BiLogoReact } from 'react-icons/bi';

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 40px;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const RotatingIcon = styled(BiLogoReact)`
  position: absolute;
  right: 5px;
  transform: translateX(-50%);
  animation: ${rotate} 5s linear infinite;
`;
