import React, { useState } from 'react';
import Logo from '/logo.png';
import {
  StyledInput,
  StyledLoginContainer,
  StyledLoginForm,
  StyledLogoContainer,
  StyledLogoIcon,
  StyledSubmitButton,
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
    <StyledLoginContainer data-testid="login-component">
      <StyledLogoContainer>
        <StyledLogoIcon src={Logo} />
      </StyledLogoContainer>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledSubmitButton data-testid="login-button" type="submit">
          Log in
        </StyledSubmitButton>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default Login;
