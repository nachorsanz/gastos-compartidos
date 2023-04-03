export type UserType = {
  id: string;
  name: string;
  email: string;
  group: GroupType[];
};

export type UserGroupType = UserType[];

export type GroupType = string;
