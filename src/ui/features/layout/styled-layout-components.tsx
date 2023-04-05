import styled from '@emotion/styled';

export const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  background-color: #f6f6f6;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: -18px;
`;

export const StyledLogoIcon = styled.img`
  width: 40px;
  margin-right: 12px;
`;

export const StyledLogoText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media (max-width: 700px) {
    margin: 0;
    width: 300px;
  }
`;
