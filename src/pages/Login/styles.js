import styled from 'styled-components';

import TransitionAnimation from '../../assets/styles/Animations/TransitionAnimation';

export const Container = styled.form`
  padding: 48px 32px;
  outline: 2px solid rgba(255,255,255, .5);
  border-radius: 32px;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    font-size: 128px;
    margin-bottom: 64px;
  }
`;

export const RememberAndRecoverContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;

  .remember {
    display: flex;
    gap: 4px;
    align-items: center;
    user-select: none;

    .checkIcon {
      cursor: pointer;
      font-size: 16px;
      animation: ${TransitionAnimation} .2s linear;
    }
  }

  span {
    text-decoration: underline;
    transition: color .2s ease-in-out;

    &:hover {
      color: rgb(220,220,220);
      cursor: pointer;
      user-select: none;
    }
  }
`;

export const NoRegister = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 4px;

  a {
    color: #ddd;
    cursor: pointer;
    
    &:hover {
      opacity: .9;
    }
  }
`;
