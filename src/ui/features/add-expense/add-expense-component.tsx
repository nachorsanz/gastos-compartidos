import React, { useState } from 'react';
import { PaymentGroupType } from '../../../domain/payments';
import { useAppContext } from '../../../config-adapter/user-context-provider';
import { GroupType } from '../../../domain/groups';
import {
  StyledButton,
  StyledCard,
  StyledForm,
  StyledInput,
  StyledSelect,
} from './styled-add-expense-components';

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
      user?.split('@')[0] ?? '',
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
      <StyledForm onSubmit={handleSubmit}>
        <StyledCard>
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
          <StyledInput
            data-testid="add-expense-amout"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <StyledInput
            data-testid="add-expense-description"
            placeholder="Descripcion"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <StyledButton data-testid="add-expense-button" type="submit">
            +
          </StyledButton>
        </StyledCard>
      </StyledForm>
    </div>
  );
};

export default AddExpenseForm;
