import styled from 'styled-components';

export default styled.button`
  margin-top: 32px;
  width: 100%;
  outline: 2px solid rgba(255,255,255,0.3);
  border: none;
  padding: 12px;
  border-radius: 16px;
  font-size: 24px;
  color: white;
  background-color: rgba(255,255,255,0.1);
  transition: background-color .2s ease-in;
  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
  &:disabled {
    background-color: rgba(0,0,0, 0.2);
    cursor: auto;
    color: rgba(150,150,150, 0.8);
    outline-color: transparent;
  }
`;
