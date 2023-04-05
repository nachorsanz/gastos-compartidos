import { UserGroupType, UserType } from '../../domain/user';
import { createMockUser, createMockUsersGroup } from './mock-factory';

describe('Mock Factory', () => {
  it('Get mock user', () => {
    const user: UserType = createMockUser();
    expect(user).toEqual({
      id: '1',
      name: 'John Doe',
      email: 'johndoe@mail.com',
      group: ['Grupo 1'],
    });
  });

  it('Get mock user group', () => {
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
});
