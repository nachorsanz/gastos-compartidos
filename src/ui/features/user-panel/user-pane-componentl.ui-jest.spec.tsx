/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import UserPanel from './user-panel-component';
import { render } from '@testing-library/react';
import {
  createGroups,
  createMockPaymentsGroup,
  createMockUsersGroup,
} from '../../../api/mock/mock-factory';
import WrapperTestingProvider from '../../../config-adapter/wrapper-testing-provider';

describe('Home', () => {
  it('should render', () => {
    const payments = createMockPaymentsGroup();
    const groups = createGroups();
    const calculateTotalBalance = jest.fn();
    const sortedPayments = jest.fn();
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <UserPanel payments={payments} groups={groups} />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('user-panel')).toBeInTheDocument();
  });
});
