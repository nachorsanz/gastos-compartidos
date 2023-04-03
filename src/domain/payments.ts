export type PaymentType = {
  id: string;
  userId: string;
  description: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PaymentGroupType = PaymentType[];
