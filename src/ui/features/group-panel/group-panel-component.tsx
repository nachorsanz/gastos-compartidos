import React, { useState } from 'react';
import styled from '@emotion/styled';
import GroupPanelItem from './group-panel-item-component';
import { PaymentGroupType } from '../../../domain/payments';
import { createMockPaymentsGroup } from '../../../api/mock/mock-factory';

const StyledGroupPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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
      <StyledGroupPanel>
        {sortedPayments.map((payment, index) => (
          <GroupPanelItem
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
