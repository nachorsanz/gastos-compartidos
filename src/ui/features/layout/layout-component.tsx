import React, { useState } from 'react';
import styled from '@emotion/styled';
import UserPanel from '../user-panel/user-panel';
import AddMemberForm from '../add-member/add-member-component';
import AddExpenseForm from '../add-expense/add-expense-component';
import { PaymentGroupType } from '../../../domain/payments';
import {
  createGroups,
  createMockPaymentsGroup,
} from '../../../api/mock/mock-factory';
import { GroupType } from '../../../domain/groups';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Layout: React.FC = () => {
  const [payments, setPayments] = useState<PaymentGroupType>(
    createMockPaymentsGroup(),
  );

  const [groupsState, setGroupsState] = useState<GroupType[]>([
    ...createGroups(),
  ]);

  const handleUpdateGroups = (groupsState: GroupType[]) => {
    setGroupsState([...groupsState]);
  };

  const handleNewPayment = (
    userId: string,
    group: string,
    amount: number,
    description: string,
    createdAt: string,
  ) => {
    setPayments([
      ...payments,
      { userId, group, amount, description, createdAt, state: 'pendiente' },
    ]);
  };
  return (
    <LayoutContainer data-testid="layout">
      <UserPanel payments={payments} groups={groupsState} />
      <AddMemberForm
        groupsState={groupsState}
        handleUpdateGroups={handleUpdateGroups}
      />
      <AddExpenseForm
        handleNewPayment={handleNewPayment}
        payments={payments}
        groups={groupsState}
      />
    </LayoutContainer>
  );
};

export default Layout;
