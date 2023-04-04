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

const GroupPanel: React.FC = () => {
  const [payments, setPayments] = useState<PaymentGroupType>(
    createMockPaymentsGroup(),
  );

  const handleNewPayment = (
    userId: string,
    amount: number,
    description: string,
    createdAt: string,
    id: string,
  ) => {
    setPayments([...payments, { id, userId, amount, description, createdAt }]);
  };

  const sortedPayments = [...payments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div data-testid="group-panel">
      <StyledGroupPanel>
        {sortedPayments.map((payment, index) => (
          <GroupPanelItem
            key={`payment-${index}`}
            id={payment.id}
            userId={payment.userId}
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
