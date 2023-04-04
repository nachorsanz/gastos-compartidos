import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PaymentType } from '../../../domain/payments';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ExpenseCard = styled(Card)`
  cursor: pointer;
`;

const ExpenseDescription = styled.h4`
  margin: 0 0 0.5rem;
`;

const ExpenseAmount = styled.p`
  margin: 0;
`;

 const AddExpenseForm: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [expenses, setExpenses] = useState<PaymentType[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense: PaymentType = {
      id: Math.random().toString(),
      userId: '1234', // just a dummy userId for now
      description,
      amount,
      createdAt: new Date().toISOString(),
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount(0);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Card>
          <Input placeholder='Descripcion' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
          <Button type="submit">+</Button>
        </Card>
      </Form>
      {expenses.length > 0 &&
        expenses.map((expense) => (
          <ExpenseCard key={expense.id}>
            <div>
              <ExpenseDescription>{expense.description}</ExpenseDescription>
              <ExpenseAmount>{`$${expense.amount.toFixed(2)}`}</ExpenseAmount>
            </div>
            <div>{expense.createdAt}</div>
          </ExpenseCard>
        ))}
    </div>
  );
};

export default AddExpenseForm