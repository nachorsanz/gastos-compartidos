import React, { useState } from 'react';
import styled from '@emotion/styled';
import GroupPanel from '../group-panel/group-panel-component';
import { PaymentGroupType } from '../../../domain/payments';
import { useAppContext } from '../../../config-adapter/user-context-provider';
import { GroupType } from '../../../domain/groups';
import { calculateTotalBalance } from '../../../common/utils';

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  max-width: 800px;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
  margin-bottom: 17.5px;
  font-size: 20px;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 18px;
  margin-bottom: 16px;
`;
type UserPanelProps = {
  payments: PaymentGroupType;
  groups: GroupType[];
};

const UserPanel: React.FC<UserPanelProps> = ({ payments, groups }) => {
  const { user } = useAppContext();

  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<GroupType>();
  const handleGroupSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const groupIndex = parseInt(e.target.value);
    setSelectedGroup(groups[groupIndex]);
  };

  const handleShowPanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div data-testid="user-panel">
      <StyledTitle>Hi, {user?.split('@')[0]}!</StyledTitle>
      <StyledItem>Total: {calculateTotalBalance(payments)} €</StyledItem>
      <StyledUserContainer>
        <StyledButton onClick={handleShowPanel}>
          {showPanel ? 'Cerrar' : 'Ampliar Informacion'}
        </StyledButton>

        {showPanel && (
          <StyledSelect onChange={handleGroupSelect}>
            <option value="">Select Group</option>
            {groups.map((group, index) => (
              <option key={group.name} value={index}>
                {group.name}
              </option>
            ))}
          </StyledSelect>
        )}
      </StyledUserContainer>
      {showPanel && (
        <GroupPanel
          payments={
            !selectedGroup
              ? payments
              : payments.filter(
                  (payment) => payment.group === selectedGroup.name,
                )
          }
        />
      )}
    </div>
  );
};

export default UserPanel;
