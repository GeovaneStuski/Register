import styled from 'styled-components';

export const Container = styled.form`
  padding: 48px 32px;
  outline: 2px solid rgba(255,255,255, .5);
  border-radius: 32px;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 32px;
  }
`;

export const HaveAccount = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 4px;

  a {
    color: #ddd;
    cursor: pointer;

    &:hover {
      opacity: .9;
    }
  }`;
