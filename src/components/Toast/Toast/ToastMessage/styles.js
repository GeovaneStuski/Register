import styled, { css } from 'styled-components';

const ToastVariants = {
  default: css`
  background-color: #5061FC;
  `,
  danger: css`
  background-color: #FC5050;
  `,
  success: css`
  background-color: #51CA73;
  `,
};

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: red;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  cursor: pointer;
  ${({ type }) => ToastVariants[type] || ToastVariants.default};
  &+& {
    margin-top: 16px;
  }
`;
