import React, { useState } from 'react';
import UserPanel from '../user-panel/user-panel-component';
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
import {
  StyledHeader,
  StyledLayoutContainer,
  StyledLogoIcon,
  StyledLogoText,
  StyledMain,
} from './styled-layout-components';

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
    <StyledLayoutContainer data-testid="layout">
      <StyledHeader>
        <StyledLogoIcon src={Logo} alt="logo" />
        <StyledLogoText>Gastos Compartidos</StyledLogoText>
      </StyledHeader>
      <StyledMain>
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
      </StyledMain>
    </StyledLayoutContainer>
  );
};

export default Layout;
