import React, { useState } from 'react';
import styled from '@emotion/styled';
import GroupPanel from '../group-panel/group-panel-component';
import { PaymentGroupType } from '../../../domain/payments';
import { useAppContext } from '../../../config-adapter/user-context-provider';
import { GroupType } from '../../../domain/groups';

const StyledGroupComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  div {
    font-size: 16px;
    font-weight: bold;
  }
`;

const StyledGroupComponentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
const StyledTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
`;
const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
  margin-bottom: 30px;
`;
const StyledSelect = styled.select`
  padding: 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
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
      <StyledGroupComponent>
        <StyledGroupComponentContainer>
          <StyledItem>Estás en {groups.length} grupos</StyledItem>

          <StyledItem>
            Total:{' '}
            {payments.reduce((acc, payment) => {
              return acc + payment.amount;
            }, 0)}{' '}
            €
          </StyledItem>
        </StyledGroupComponentContainer>
        <StyledButton onClick={handleShowPanel}>
          {showPanel ? 'Cerrar' : 'Ampliar'}
        </StyledButton>

        {showPanel && (
          <>
            <StyledSelect onChange={handleGroupSelect}>
              <option value="">Select Group</option>
              {groups.map((group, index) => (
                <option key={group.name} value={index}>
                  {group.name}
                </option>
              ))}
            </StyledSelect>
            <GroupPanel
              payments={
                !selectedGroup
                  ? payments
                  : payments.filter(
                      (payment) => payment.group === selectedGroup.name,
                    )
              }
            />
          </>
        )}
      </StyledGroupComponent>
    </div>
  );
};

export default UserPanel;
