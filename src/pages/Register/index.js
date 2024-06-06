import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import {
  BsFillPersonFill as PersonIcon,
  BsFillEnvelopeFill as EmailIcon,
  BsPhoneFill as PhoneIcon,
  BsLockFill as LockIcon,
} from 'react-icons/bs';

import AuthenticationService from '../../services/AuthenticationService';

import useError from '../../hooks/useError';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/phoneFormater';

import { Container, HaveAccount } from './styles';

import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const {
    getErrorMensageByFieldName, removeErrors, setErrors, error,
  } = useError();

  const isFormValid = (
    username
    && isEmailValid(email)
    && password.length > 5
    && confirmPassword === password
    && error.length === 0
  );

  function handleViewPassword() {
    setPasswordIsVisible((PrevState) => !PrevState);
  }

  function handleChangeUserName(event) {
    setUserName(event.target.value);

    if (!event.target.value) {
      setErrors({ field: 'username', message: 'Um nome de usuário é necessário' });
    } else {
      removeErrors('username');
    }
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
    if (isEmailValid(event.target.value)) {
      removeErrors('email');
    }
  }

  function handleChangePhone(event) {
    setPhone(formatPhone(event.target.value));

    if (event.target.value.length >= 13) {
      removeErrors('phone');
    }
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);

    if (event.target.value.length > 5) {
      removeErrors('password');
    }
  }

  function handleChangeConfirmPassword(event) {
    setConfirmPassword(event.target.value);

    if (event.target.value !== password) {
      setErrors({ field: 'confirmPassword', message: 'as senhas não coeciden' });
    } else {
      removeErrors('confirmPassword');
    }
  }

  function handleBlurEmail() {
    if (!isEmailValid(email)) {
      setErrors({ field: 'email', message: 'email invalido' });
    }
  }

  function handleBlurPhone() {
    if (phone.length < 14) {
      setErrors({ field: 'phone', message: 'telefone invalido' });
    }
  }

  function handleBlurPassword() {
    if (password.length < 6) {
      setErrors({ field: 'password', message: 'senha muito curta, a senha deve conter pelo menos 6 caracteres' });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await AuthenticationService.Register({
        username, email, phone, password,
      });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <h1>Registrar-se</h1>

      <FormGroup error={getErrorMensageByFieldName('username')}>
        <PersonIcon className="iconsLabel" />

        <Input
          placeholder="Digite um nome de usuário*"
          type="text"
          maxLength={40}
          value={username}
          onChange={handleChangeUserName}
        />
      </FormGroup>

      <FormGroup error={getErrorMensageByFieldName('email')}>
        <EmailIcon className="iconsLabel" />

        <Input
          placeholder="Digite um email*"
          type="email"
          maxLength={100}
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
        />
      </FormGroup>

      <FormGroup error={getErrorMensageByFieldName('phone')}>
        <PhoneIcon className="iconsLabel" />

        <Input
          placeholder="Digite um telefone"
          type="text"
          maxLength={15}
          value={phone}
          onChange={handleChangePhone}
          onBlur={handleBlurPhone}
        />
      </FormGroup>

      <FormGroup
        error={getErrorMensageByFieldName('password')}
        options={{ passwordIsVisible, handleViewPassword }}
      >
        <LockIcon className="iconsLabel" />

        <Input
          placeholder="Digite uma senha*"
          type={passwordIsVisible ? 'text' : 'password'}
          maxLength={40}
          value={password}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
        />
      </FormGroup>

      <FormGroup
        error={getErrorMensageByFieldName('confirmPassword')}
        options={{ passwordIsVisible, handleViewPassword }}
      >
        <LockIcon className="iconsLabel" />

        <Input
          placeholder="Digite uma senha*"
          type={passwordIsVisible ? 'text' : 'password'}
          maxLength={40}
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
      </FormGroup>

      <Button disabled={!isFormValid} type="submit">Registrar-se</Button>

      <HaveAccount>
        Já tem uma conta? clique

        <Link to="/login">Aqui</Link>
      </HaveAccount>
    </Container>
  );
}
