import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PaymentGroupType } from '../../../domain/payments';
import { useAppContext } from '../../../config-adapter/user-context-provider';
import { GroupType } from '../../../domain/groups';
import { convertDateFormat } from '../../../domain/utils';

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

const StyledSelect = styled.select`
  padding: 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

type AddExpenseFormProps = {
  handleNewPayment: (
    userId: string,
    group: string,
    amount: number,
    description: string,
    createdAt: string,
  ) => void;
  payments: PaymentGroupType;
  groups: GroupType[];
};

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({
  handleNewPayment,
  payments,
  groups,
}) => {
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [selectedGroup, setSelectedGroup] = useState<GroupType>();
  const { user } = useAppContext();

  const handleGroupSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const groupIndex = parseInt(e.target.value);
    setSelectedGroup(groups[groupIndex]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNewPayment(
      user ?? '',
      selectedGroup?.name ?? '',
      amount,
      description,
      new Date().toLocaleDateString(),
    );
    setDescription('');
    setAmount(0);
  };

  return (
    <div data-testid="add-expense-component">
      <Form onSubmit={handleSubmit}>
        <Card>
          <StyledSelect
            data-testid="add-expense-select"
            onChange={handleGroupSelect}
          >
            <option value="">Select Group</option>
            {groups.map((group, index) => (
              <option key={group.name} value={index}>
                {group.name}
              </option>
            ))}
          </StyledSelect>
          <Input
            data-testid="add-expense-amout"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <Input
            data-testid="add-expense-description"
            placeholder="Descripcion"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button data-testid="add-expense-button" type="submit">
            +
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default AddExpenseForm;
