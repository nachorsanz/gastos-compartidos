import React, { useEffect } from 'react';
import Login from '../ui/features/login-component/login-component';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../config-adapter/user-context-provider';

const StyledLoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(3, 36, 0);
  background: linear-gradient(
    357deg,
    rgba(3, 36, 0, 1) 0%,
    rgba(9, 121, 83, 1) 4%,
    rgba(0, 212, 255, 1) 100%
  );
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
    <StyledLoginPageContainer data-testid="login">
      <Login onLogin={onLogin} />
    </StyledLoginPageContainer>
  );
};

export default LoginPage;
