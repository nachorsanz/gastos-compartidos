/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { createMockPaymentsGroup } from '../../../api/mock/mock-factory';
import GroupPanel from './group-panel-component';

describe('GroupPanel component', () => {
  const payments = createMockPaymentsGroup();

  it('renders correctly', () => {
    const { getByTestId } = render(<GroupPanel payments={payments} />);
    const groupPanel = getByTestId('group-panel');
    expect(groupPanel).toBeInTheDocument();
  });

  it('sorts the payments by date', () => {
    const { getAllByTestId } = render(<GroupPanel payments={payments} />);
    const paymentItems = getAllByTestId('group-panel-item');
    expect(paymentItems[0]).toHaveTextContent('Payment 2');
    expect(paymentItems[1]).toHaveTextContent('Payment 1');
  });
});
