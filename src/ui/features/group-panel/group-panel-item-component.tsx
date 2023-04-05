import React from 'react';
import { PaymentType } from '../../../domain/payments';
import {
  StyledAmount,
  StyledDate,
  StyledDescription,
  StyledGroupPanelItem,
  StyledPaymentState,
  StyledUserInfo,
} from './styled-group-panel-components';

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
      <StyledUserInfo>
        {userId} en {group}
      </StyledUserInfo>
      <StyledAmount>
        Importe: {state === 'finalizado' ? amount : `-${amount}`}{' '}
      </StyledAmount>
      <StyledDescription>Descripción: {description} </StyledDescription>
      <StyledDate>Fecha: {createdAt}</StyledDate>
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
