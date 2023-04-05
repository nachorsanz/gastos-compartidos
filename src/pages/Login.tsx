import React, { useEffect } from 'react';
import Login from '../ui/features/login-component/login-component';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../config-adapter/user-context-provider';

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser, user } = useAppContext();
  const onLogin = (email: string, password: string) => {
    setUser(email);
    localStorage.setItem('user', email);
    navigate('/home');
  };

  useEffect(() => {
    if (user) {
      navigate('/home');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <LoginPageContainer data-testid="login">
      <Login onLogin={onLogin} />
    </LoginPageContainer>
  );
};

export default LoginPage;
