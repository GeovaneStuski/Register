import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 48px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  &::placeholder {
    color: rgba(255,255,255, .5);
  }
`;
