import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Container from './styles';
import Theme from '../../assets/styles/theme/default';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import Route from '../../routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Container>
          <GlobalStyles />
          <Route />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
