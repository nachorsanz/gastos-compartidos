import { PaymentGroupType, PaymentType } from '../../domain/payments';
import { UserGroupType, UserType } from '../../domain/user';
import {
  createMockUser,
  createMockUsersGroup,
  createPayment,
  createMockPaymentsGroup,
  createGroups,
} from './mock-factory';

describe('Mock Factory', () => {
  it('creates a mock user', () => {
    const user: UserType = createMockUser();
    expect(user).toEqual({
      id: '1',
      name: 'John Doe',
      email: 'johndoe@mail.com',
      group: ['Grupo 1'],
    });
  });

  it('creates a mock user group', () => {
    const users: UserGroupType = createMockUsersGroup();
    expect(users).toEqual([
      {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@mail.com',
        group: ['Grupo 1'],
      },
      {
        id: '2',
        name: 'Jane Doe',
        email: 'janedoe@mail.com',
        group: ['Grupo 2'],
      },
    ]);
  });

  it('creates a mock payment', () => {
    const payment: PaymentType = createPayment();
    expect(payment).toEqual({
      userId: '1',
      group: 'Grupo 1',
      description: 'Payment 1',
      amount: 100,
      createdAt: '4/5/2023',
      state: 'cerrado',
    });
  });

  it('creates a mock payments group', () => {
    const payments: PaymentGroupType = createMockPaymentsGroup();
    expect(payments).toEqual([
      {
        userId: '1',
        group: 'Grupo 1',
        description: 'Payment 1',
        amount: 100,
        createdAt: '4/5/2023',
        state: 'cerrado',
      },
      {
        userId: '2',
        group: 'Grupo 1',
        description: 'Payment 2',
        amount: 200,
        createdAt: '5/4/2023',
        state: 'pendiente',
      },
      {
        userId: '1',
        group: 'Grupo 2',
        description: 'Payment 3',
        amount: 300,
        createdAt: '4/5/2023',
        state: 'cerrado',
      },
    ]);
  });
});
