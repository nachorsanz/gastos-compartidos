import { PaymentType } from '../domain/payments';

export const convertDateFormat = (dateString: string): string => {
  const [day, month, year] = dateString.split('/');
  return `${month}/${day}/${year}`;
};

export const calculateTotalBalance = (paymentArray: PaymentType[]): number => {
  let total = 0;
  const sortedPayments = sortPayments(paymentArray);

  sortedPayments.forEach((payment) => {
    if (payment.state === 'pendiente') {
      total -= payment.amount;
    } else if (payment.state === 'finalizado') {
      total += payment.amount;
    }
  });

  return total;
};

export const sortPayments = (payments: PaymentType[]): PaymentType[] => {
  const pendingPayments = payments.filter(
    (payment) => payment.state === 'pendiente',
  );
  const completedPayments = payments.filter(
    (payment) => payment.state === 'finalizado',
  );

  return [...pendingPayments, ...completedPayments];
};
