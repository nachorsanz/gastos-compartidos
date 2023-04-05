import styled from '@emotion/styled';

export const StyledAccordionWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #d1d1d1;
  margin: 0;
  padding: 0;
  width: 600px;
  background-color: #fff;
  @media (max-width: 700px) {
    width: 300px;
  }
`;

export const StyledAccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #d1d1d1;

  & > h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #262626;
  }

  & > span {
    font-size: 18px;
    font-weight: 600;
    color: #0077c2;
    transition: transform 0.2s ease;
    transform: rotate(0deg);
  }

  &.open > span {
    transform: rotate(180deg);
  }
`;

export const StyledAccordionContent = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: #f9f9f9;

  & > p {
    margin: 0;
    font-size: 16px;
    color: #262626;
  }
`;
