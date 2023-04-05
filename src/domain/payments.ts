export type PaymentType = {
  userId: string;
  group: string;
  description: string;
  amount: number;
  createdAt: string;
  state: string;
};

export type PaymentGroupType = PaymentType[];

export type PaymentGroupMembersType = {
  name: string;
  members: string[];
  balance: number;
  createdAt: string;
  state: string;
};
