import styled, { keyframes } from 'styled-components';
import { BiLogoReact } from 'react-icons/bi';

export const LogoWrapper = styled.div`
  position: fixed;
  top: 8px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
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
  animation: ${rotate} 5s linear infinite;
`;
