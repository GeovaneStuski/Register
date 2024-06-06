import PropTypes from 'prop-types';
import {
  BsEyeFill as EyeIcon,
  BsEyeSlashFill as CrossedEye,
} from 'react-icons/bs';
import Container from './styles';

export default function FormGroup({ children, options = null, error = null }) {
  return (
    <Container error={error}>
      {children}
      {error && <span className="error">{error}</span>}
      {options && (
        options.passwordIsVisible
          ? <EyeIcon className="eyeIcon" onClick={options.handleViewPassword} />
          : <CrossedEye className="eyeIcon" onClick={options.handleViewPassword} />

      )}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  options: PropTypes.shape({
    passwordIsVisible: PropTypes.bool.isRequired,
    handleViewPassword: PropTypes.func.isRequired,
  }),
};
