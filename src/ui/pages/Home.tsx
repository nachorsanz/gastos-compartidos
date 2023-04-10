import React, { useState } from 'react';
import Layout from '../features/layout/layout-component';
import { PaymentGroupType } from '../../domain/payments';
import {
  createGroups,
  createMockPaymentsGroup,
} from '../../api/mock/mock-factory';
import { GroupType } from '../../domain/groups';

const Home = () => {
  const [payments, setPayments] = useState<PaymentGroupType>(
    createMockPaymentsGroup(),
  );

  const [groups, setGroups] = useState<GroupType[]>([...createGroups()]);

  const handleUpdateGroups = (groupsState: GroupType[]) => {
    setGroups([...groupsState]);
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
    <div data-testid="home">
      <Layout
        payments={payments}
        groups={groups}
        handleNewPayment={handleNewPayment}
        handleUpdateGroups={handleUpdateGroups}
      />
    </div>
  );
};

export default Home;
