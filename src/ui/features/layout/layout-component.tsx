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
import Logo from '/logo.png';
import AccordionWrapper from '../accordion-wrapper/accordion-wrapper-component';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  background-color: #f6f6f6;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: -18px;
`;

const LogoIcon = styled.img`
  width: 40px;
  margin-right: 12px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media (max-width: 700px) {
    margin: 0;
    width: 300px;
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
      <Header>
        <LogoIcon src={Logo} alt="logo" />
        <LogoText>Gastos Compartidos</LogoText>
      </Header>
      <Main>
        <UserPanel payments={payments} groups={groupsState} />
        <AccordionWrapper
          title="Añadir Gastos"
          data-testid="accordion-expense"
          children={
            <AddExpenseForm
              handleNewPayment={handleNewPayment}
              payments={payments}
              groups={groupsState}
            />
          }
        />
        <AccordionWrapper
          title="Añadir Miembros"
          data-testid="accordion-member"
          children={
            <AddMemberForm
              groupsState={groupsState}
              handleUpdateGroups={handleUpdateGroups}
            />
          }
        />
      </Main>
    </LayoutContainer>
  );
};

export default Layout;
