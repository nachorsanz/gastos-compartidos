/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Layout from './layout-component';
import { render } from '@testing-library/react';
import WrapperTestingProvider from '../../../config-adapter/wrapper-testing-provider';

describe('Home', () => {
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

  it('should render add member', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Layout />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('add-member-component')).toBeInTheDocument();
  });

  it('should render add expense', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Layout />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('add-expense-component')).toBeInTheDocument();
  });
});
