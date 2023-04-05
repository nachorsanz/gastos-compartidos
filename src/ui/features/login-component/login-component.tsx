import React, { useState } from 'react';
import Logo from '/logo.png';
import {
  Input,
  LoginContainer,
  LoginForm,
  LogoContainer,
  LogoIcon,
  SubmitButton,
} from './styled-login-components';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <LoginContainer data-testid="login-component">
      <LogoContainer>
        <LogoIcon src={Logo} />
      </LogoContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton data-testid="login-button" type="submit">
          Log in
        </SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
