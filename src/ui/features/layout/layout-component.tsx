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

type LayoutProps = {
  payments: PaymentGroupType;
  groups: GroupType[];
  handleNewPayment: (
    userId: string,
    group: string,
    amount: number,
    description: string,
    createdAt: string,
  ) => void;
  handleUpdateGroups: (groupsState: GroupType[]) => void;
}

const Layout: React.FC<LayoutProps> = ({...props}) => {
  const {payments, groups, handleNewPayment, handleUpdateGroups} = props

  return (
    <StyledLayoutContainer data-testid="layout">
      <StyledHeader>
        <StyledLogoIcon src={Logo} alt="logo" />
        <StyledLogoText>Gastos Compartidos</StyledLogoText>
      </StyledHeader>
      <StyledMain>
        <UserPanel payments={payments} groups={groups} />
        <AccordionWrapper
          title="Añadir Gastos"
          data-testid="accordion-expense"
          children={
            <AddExpenseForm
              handleNewPayment={handleNewPayment}
              payments={payments}
              groups={groups}
            />
          }
        />
        <AccordionWrapper
          title="Añadir Miembros"
          data-testid="accordion-member"
          children={
            <AddMemberForm
              groupsState={groups}
              handleUpdateGroups={handleUpdateGroups}
            />
          }
        />
      </StyledMain>
    </StyledLayoutContainer>
  );
};

export default Layout;
