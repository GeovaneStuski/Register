import HttpClient from './utils/HttpClient';

class AuthenticationService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3002');
  }

  async Login(loginForm) {
    const response = await this.HttpClient.post('/login', loginForm);

    return response;
  }

  async Register(registerForm) {
    const response = await this.HttpClient.post('/register', registerForm);

    return response;
  }
}

export default new AuthenticationService();
