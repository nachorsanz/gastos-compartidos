import styled from '@emotion/styled';


export const LoginContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const LogoIcon = styled.img`
  width: 200px;

`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 320px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #0072c6;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #005ea2;
  }
`;