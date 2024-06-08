import { useEffect, useState } from 'react';
import Container from './styles';

import AuthenticationService from '../../services/AuthenticationService';

import toast from '../../utils/toast';

export default function Dashboard() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log('useEffect renderizou');
    async function AuthService() {
      try {
        const token = localStorage.getItem('access-token');

        const response = await AuthenticationService.Authenticator(token);

        toast('success', response.message);

        setIsAuth(true);
      } catch (err) {
        toast('danger', err.message);
        setIsAuth(false);
      }
    }
    AuthService();
  }, []);
  return (
    <Container>
      <h1>Dash Board</h1>
      <span>{isAuth ? 'Authenticated' : 'Rejected'}</span>
    </Container>
  );
}
