/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AddExpenseForm from './add-expense-component';
import {
  createGroups,
  createMockPaymentsGroup,
} from '../../../api/mock/mock-factory';
import WrapperTestingProvider from '../../../config-adapter/wrapper-testing-provider';

const payments = createMockPaymentsGroup();
const groups = createGroups();
const handleNewPaymentMock = jest.fn();

it('should render the component correctly', () => {
  const { getByTestId } = render(
    <WrapperTestingProvider>
      <AddExpenseForm
        handleNewPayment={handleNewPaymentMock}
        payments={payments}
        groups={groups}
      />
    </WrapperTestingProvider>,
  );
  const component = getByTestId('add-expense-component');
  expect(component).toBeInTheDocument();
});

it.skip('should call handleNewPayment with correct arguments when form is submitted', () => {
  const { getByTestId } = render(
    <WrapperTestingProvider>
      <AddExpenseForm
        handleNewPayment={handleNewPaymentMock}
        payments={payments}
        groups={groups}
      />
    </WrapperTestingProvider>,
  );
  const select = getByTestId('add-expense-select');
  const amountInput = getByTestId('add-expense-amout');
  const descriptionInput = getByTestId('add-expense-description');
  const submitButton = getByTestId('add-expense-button');
  fireEvent.change(select, { target: { value: '0' } });
  fireEvent.change(amountInput, { target: { value: '10' } });
  fireEvent.change(descriptionInput, {
    target: { value: 'Test description' },
  });
  fireEvent.click(submitButton);
  expect(handleNewPaymentMock).toHaveBeenCalledWith(
    '',
    'Grupo 1',
    10,
    'Test description',
    '4/5/2023',
  );
});
