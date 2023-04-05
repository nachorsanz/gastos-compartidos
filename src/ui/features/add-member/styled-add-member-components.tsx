import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;

  @media (max-width: 700px) {
    min-width: 250px;
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

export const StyledSelectOption = styled.option`
  font-size: 16px;
  background: #fff;
  position: relative;
  &:hover {
    background: #e0f2f7;
  }
`;

export const StyledInput = styled.input`
  padding: 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
`;

export const StyledCard = styled.div`
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

export const StyledGroupCard = styled(StyledCard)`
  cursor: pointer;
`;

export const StyledGroupName = styled.h4`
  margin: 0 0 0.5rem;
`;

export const StyledGroupMembers = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledGroupMember = styled.li`
  margin-bottom: 0.25rem;
`;

export const StyledTitleLink = styled.p`
  margin: 0;
  padding: 0;
  color: #0077cc;
  cursor: pointer;
`;
