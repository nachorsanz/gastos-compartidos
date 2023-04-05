import React, { useState } from 'react';
import styled from '@emotion/styled';
import GroupPanelItem from './group-panel-item-component';
import { PaymentGroupType } from '../../../domain/payments';
import { createMockPaymentsGroup } from '../../../api/mock/mock-factory';

const StyledGroupPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

type GroupPanelProps = {
  payments: PaymentGroupType;
};

const GroupPanel: React.FC<GroupPanelProps> = ({ payments }) => {
  const sortedPayments = [...payments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div data-testid="group-panel">
      <StyledGroupPanel data-testid="group-panel-list">
        {sortedPayments.map((payment, index) => (
          <GroupPanelItem
            data-testid="group-panel-item"
            key={`payment-${index}`}
            userId={payment.userId}
            state={payment.state}
            group={payment.group}
            amount={payment.amount}
            description={payment.description}
            createdAt={payment.createdAt}
          />
        ))}
      </StyledGroupPanel>
    </div>
  );
};

export default GroupPanel;
``;
