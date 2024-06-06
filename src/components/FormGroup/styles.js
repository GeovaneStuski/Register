import styled, { css } from 'styled-components';

import TransitionAnimation from '../../assets/styles/Animations/TransitionAnimation';

export default styled.label`
  width: 100%;
  outline: 2px solid transparent;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  background-color: rgba(255,255,255, .3);
  border-radius: 8px;
  transition: outline-color .3s ease-in-out;
  .eyeIcon {
    font-size: 24px;
    cursor: pointer;
    animation: ${TransitionAnimation} .2s linear;
  }
  .iconsLabel {
    font-size: 24px;
  } 
  &:focus-within {
    outline-color: rgba(255,255,255, .5);
  }
  &+& {
    margin-top: 16px;
  }

  
  ${({ error }) => error && css`
  position: relative;
  margin-bottom: 12px;
  outline-color: rgba(235,0,0);
  .error {
    position: absolute;
    bottom: -50%;
    left: 4px;
    transform: translateY(-30%);
    font-size: 12px;
    color: red;
    animation: ${TransitionAnimation} .2s ease-in-out;
  }
  &:focus-within {
    outline-color: rgba(235,0,0);
  }
  `}
`;
