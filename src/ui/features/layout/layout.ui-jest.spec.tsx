/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Layout from './layout-component';
import { render, act } from '@testing-library/react';
import WrapperTestingProvider from '../../../config-adapter/wrapper-testing-provider';
import React from 'react';
import { createGroups, createMockPaymentsGroup } from '../../../api/mock/mock-factory';

describe('Layout', () => {
  const payments = createMockPaymentsGroup();
  const groups = createGroups();
  const handleNewPayment = jest.fn()
  const handleUpdateGroups = jest.fn()


  it('should render', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Layout 
          payments={payments}
          groups={groups}
          handleNewPayment={handleNewPayment}
          handleUpdateGroups={handleUpdateGroups}
        />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('layout')).toBeInTheDocument();
  });

  it('should render user panel', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Layout 
          payments={payments}
          groups={groups}
          handleNewPayment={handleNewPayment}
          handleUpdateGroups={handleUpdateGroups}
        />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('user-panel')).toBeInTheDocument();
  });
});
