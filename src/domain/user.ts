export type UserType = {
  id: string;
  name: string;
  email: string;
  group: string[];
};

export type UserGroupType = UserType[];
