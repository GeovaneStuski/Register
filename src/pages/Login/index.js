import { Link } from 'react-router-dom';
import { useState } from 'react';

import {
  BsPersonCircle as UserIcon,
  BsFillEnvelopeFill as EmailIcon,
  BsLockFill as PasswordIcon,
  BsCheckSquareFill as CheckIconChecked,
  BsSquare as CheckIconNoChecked,
} from 'react-icons/bs';

import AuthenticationService from '../../services/AuthenticationService';
import useError from '../../hooks/useError';

import { Container, RememberAndRecoverContainer, NoRegister } from './styles';

import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import isEmailValid from '../../utils/isEmailValid';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [remember, setRemember] = useState(false);

  const { setErrors, removeErrors, getErrorMensageByFieldName } = useError();

  function handleViewPassword() {
    setPasswordIsVisible((PrevState) => !PrevState);
  }

  function handleRemember() {
    setRemember((PrevState) => !PrevState);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);

    if (isEmailValid(event.target.value)) {
      removeErrors('email');
    }
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await AuthenticationService.Login({
        email, password,
      });

      localStorage.setItem('access-token', response.token);
    } catch (err) {
      alert(err);
    }
  }

  async function handleBlurEmail() {
    if (!isEmailValid(email)) {
      setErrors({ field: 'email', message: 'E-mail invalido' });
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <UserIcon className="logo" />

      <FormGroup error={getErrorMensageByFieldName('email')}>
        <EmailIcon className="iconsLabel" />

        <Input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
        />
      </FormGroup>

      <FormGroup
        options={{ passwordIsVisible, handleViewPassword }}
      >
        <PasswordIcon className="iconsLabel" />

        <Input
          placeholder="Digite sua senha"
          type={passwordIsVisible ? 'text' : 'password'}
          value={password}
          onChange={handleChangePassword}

        />
      </FormGroup>

      <RememberAndRecoverContainer>
        <div className="remember">

          {remember
            ? <CheckIconChecked className="checkIcon" onClick={handleRemember} />
            : <CheckIconNoChecked className="checkIcon" onClick={handleRemember} />}

          Relembre-me
        </div>

        <span>Esqueceu a senha?</span>
      </RememberAndRecoverContainer>

      <Button type="submit">Logar</Button>

      <NoRegister>
        Não tem uma conta? clique

        <Link to="/register">Aqui</Link>
      </NoRegister>
    </Container>
  );
}
