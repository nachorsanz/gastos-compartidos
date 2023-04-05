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
  onLogin: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(name);
  };

  return (
    <StyledLoginContainer data-testid="login-component">
      <StyledLogoContainer>
        <StyledLogoIcon src={Logo} />
      </StyledLogoContainer>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Introduce tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <StyledSubmitButton data-testid="login-button" type="submit">
          Entrar
        </StyledSubmitButton>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default Login;
