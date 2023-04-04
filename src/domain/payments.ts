export type PaymentType = {
  id: string;
  userId: string;
  description: string;
  amount: number;
  createdAt: string;
};

export type PaymentGroupType = PaymentType[];

export type PaymentGroupMembersType = {
  name: string;
  members: string[];
  balance: number;
  createdAt: string;
};
