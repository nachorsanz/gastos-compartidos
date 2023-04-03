export type PaymentType = {
  id: string;
  userId: string;
  description: string;
  amount: number;
  createdAt: number;
  updatedAt: number;
};

export type PaymentGroupType = PaymentType[];
