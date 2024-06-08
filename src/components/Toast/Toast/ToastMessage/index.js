import {
  BsXCircle as ErrorIcon,
  BsCheckCircle as SuccessIcon,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Container from './styles';

export default function ToastMessage({ message, onRemoveToast }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  function handleRemoveToast() {
    onRemoveToast(message.id);
  }

  return (
    <Container type={message.type} onClick={handleRemoveToast}>
      {message.type === 'danger' && <ErrorIcon fontSize={24} />}
      {message.type === 'success' && <SuccessIcon fontSize={24} />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveToast: PropTypes.func.isRequired,
};
