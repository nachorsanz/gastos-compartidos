import React from 'react';
import styled from '@emotion/styled';
import { PaymentType } from '../../../domain/payments';

const StyledGroupPanelItem = styled.div`
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

const UserInfo = styled.div`
  font-weight: bold;
  margin-right: 10px;
  max-width: min-content;
`;

const Amount = styled.div`
  margin-right: 10px;
`;

const Description = styled.div`
  margin-right: 10px;
`;

const Date = styled.div`
  color: #999;
`;

const StyledPaymentState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 4px;
`;

const GroupPanelItem: React.FC<PaymentType> = ({
  userId,
  group,
  amount,
  description,
  state,
  createdAt,
}) => {
  return (
    <StyledGroupPanelItem data-testid="group-panel-item">
      <UserInfo>
        {userId} en {group}
      </UserInfo>
      <Amount>
        Importe: {state === 'finalizado' ? amount : `-${amount}`}{' '}
      </Amount>
      <Description>Descripción: {description} </Description>
      <Date>Fecha: {createdAt}</Date>
      <StyledPaymentState
        style={{
          color: state === 'finalizado' ? 'green' : 'red',
        }}
      >
        ·
      </StyledPaymentState>
    </StyledGroupPanelItem>
  );
};

export default GroupPanelItem;
