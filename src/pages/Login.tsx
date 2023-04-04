import React from 'react';
import Login from '../ui/features/login-component/login-component';
import { createUser } from '../api/create-user/create-user';
import styled from '@emotion/styled';

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginPage = () => {
  const onLogin = (email: string, password: string) => {
    const loggedUser = createUser({ email, password });
    console.log(loggedUser);
  };

  return (
    <LoginPageContainer data-testid="login">
        <Login onLogin={onLogin} />
    </LoginPageContainer>
  );
};

export default LoginPage;
