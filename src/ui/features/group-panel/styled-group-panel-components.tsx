import styled from '@emotion/styled';

export const StyledGroupPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const StyledGroupPanelItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    width: 280px;
    font-size: 12px;
    gap: 10px;
  }
`;

export const StyledUserInfo = styled.div`
  font-weight: bold;
  margin-right: 10px;
  max-width: min-content;
`;

export const StyledAmount = styled.div`
  margin-right: 10px;
`;

export const StyledDescription = styled.div`
  margin-right: 10px;
`;

export const StyledDate = styled.div`
  color: #999;
`;

export const StyledPaymentState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 4px;
`;
