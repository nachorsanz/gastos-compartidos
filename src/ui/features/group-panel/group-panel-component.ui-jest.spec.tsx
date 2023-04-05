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

  it('renders correctly with payments', () => {
    const { getByTestId } = render(<GroupPanel payments={payments} />);
    const groupPanel = getByTestId('group-panel');
    expect(groupPanel).toBeInTheDocument();
  });
});
