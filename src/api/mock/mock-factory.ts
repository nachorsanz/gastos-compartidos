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
