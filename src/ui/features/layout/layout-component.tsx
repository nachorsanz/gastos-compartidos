import React from 'react';
import styled from '@emotion/styled';
import UserPanel from '../user-panel/user-panel';
import AddPersonForm from '../add-member/add-member-component';
import AddExpenseForm from '../add-expense/add-expense-component';

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
  return (
    <LayoutContainer data-testid="layout">
      <UserPanel />
      <AddPersonForm />
      <AddExpenseForm />
    </LayoutContainer>
  );
};

export default Layout;
