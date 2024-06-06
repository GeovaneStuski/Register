import { BrowserRouter } from 'react-router-dom';
import Container from './styles';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import Route from '../../routes';
import ToastContainer from '../Toast/Toast/ToastContainer';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Container>
        <GlobalStyles />
        <Route />
      </Container>
    </BrowserRouter>
  );
}
