import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  @media (max-width: 700px) {
    min-width: 250px;
  }
`;

export const Input = styled.input`
  padding: 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 1rem;
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.35rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: 150px;
  @media (max-width: 700px) {
    width: 160px;
  }
`;
