import styled from '@emotion/styled';

export const StyledLoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
`;

export const StyledLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

export const StyledLogoIcon = styled.img`
  width: 200px;
`;

export const StyledLoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 700px) {
    width: 300px;
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 16px;
  padding: 12px 16px;
  border: 1px solid #0072c6;
  border-radius: 4px;
  background-color: #f8f8f8;
  width: 370px;
  font-size: 16px;
  @media (max-width: 700px) {
    width: 270px;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledSubmitButton = styled.button`
  margin-top: 24px;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  background-color: #0072c6;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #005ea2;
  }
`;
