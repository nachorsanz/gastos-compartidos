import { PaymentGroupType, PaymentType } from '../../domain/payments';
import { UserGroupType, UserType } from '../../domain/user';

export const createMockUser = (): UserType => {
  return {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@mail.com',
    group: ['1'],
  };
};

export const createMockUsersGroup = (): UserGroupType => {
  return [
    {
      id: '1',
      name: 'johndoe@mail.com',
      email: '',
      group: ['1'],
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      group: ['1'],
    },
  ];
};

export const createPayment = (): PaymentType => {
  return {
    id: '1',
    userId: '1',
    description: 'Payment 1',
    amount: 100,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  };
};

export const createMockPaymentsGroup = (): PaymentGroupType => {
  return [
    {
      id: '1',
      userId: '1',
      description: 'Payment 1',
      amount: 100,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    {
      id: '2',
      userId: '2',
      description: 'Payment 2',
      amount: 200,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
  ];
};
