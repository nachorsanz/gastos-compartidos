import styled from '@emotion/styled';

export const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 10px;
  color: #0077cc;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  max-width: 800px;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
  margin-bottom: 17.5px;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 18px;
  margin-bottom: 16px;
`;
