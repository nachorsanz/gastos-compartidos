import {
  PaymentGroupMembersType,
  PaymentGroupType,
  PaymentType,
} from '../../domain/payments';
import { UserGroupType, UserType } from '../../domain/user';

export const createMockUser = (): UserType => {
  return {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@mail.com',
    group: ['Grupo 1'],
  };
};

export const createMockUsersGroup = (): UserGroupType => {
  return [
    {
      id: '1',
      name: 'johndoe@mail.com',
      email: '',
      group: ['Grupo 1'],
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      group: ['Grupo 2'],
    },
  ];
};

export const createPayment = (): PaymentType => {
  return {
    userId: '1',
    group: 'Grupo 1',
    description: 'Payment 1',
    amount: 100,
    createdAt: '5/4/2023',
    state: 'cerrado',
  };
};

export const createMockPaymentsGroup = (): PaymentGroupType => {
  return [
    {
      userId: '1',
      group: 'Grupo 1',
      description: 'Payment 1',
      amount: 100,
      createdAt: '5/4/2023',
      state: 'cerrado',
    },
    {
      userId: '2',
      group: 'Grupo 1',
      description: 'Payment 2',
      amount: 200,
      createdAt: '4/4/2023',
      state: 'pendiente',
    },
    {
      userId: '1',
      group: 'Grupo 2',
      description: 'Payment 3',
      amount: 300,
      createdAt: '5/4/2023',
      state: 'cerrado',
    },
  ];
};

export const createGroups = (): PaymentGroupMembersType[] => {
  return [
    {
      name: 'Grupo 1',
      members: ['Juan', 'María', 'Pedro'],
      balance: 100,
      createdAt: '2022-04-01',
      state: 'cerrado',
    },
    {
      name: 'Grupo 2',
      members: ['Laura', 'Carlos', 'Ana'],
      balance: -50,
      createdAt: '2022-03-15',
      state: 'abierto',
    },
    {
      name: 'Grupo 3',
      members: ['Marta', 'Luis', 'Sara'],
      balance: 0,
      createdAt: '2022-02-28',
      state: 'cerrado',
    },
  ];
};
