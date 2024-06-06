import {
  BsXCircle as ErrorIcon,
  BsCheckCircle as SuccessIcon,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import Container from './styles';

export default function ToastMessage({ message }) {
  return (
    <Container type={message.type}>
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
};
