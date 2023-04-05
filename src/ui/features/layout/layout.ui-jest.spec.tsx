/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Layout from './layout-component';
import { render, act } from '@testing-library/react';
import WrapperTestingProvider from '../../../config-adapter/wrapper-testing-provider';
import React from 'react';

describe('Home', () => {
  const calculateTotalBalance = jest.fn();
  const sortedPayments = jest.fn();

  it('should render', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Layout />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('layout')).toBeInTheDocument();
  });

  it('should render user panel', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Layout />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('user-panel')).toBeInTheDocument();
  });
});
