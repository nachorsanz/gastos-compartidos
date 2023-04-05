import React, { useState } from 'react';
import GroupPanel from '../group-panel/group-panel-component';
import { PaymentGroupType } from '../../../domain/payments';
import { useAppContext } from '../../../config-adapter/user-context-provider';
import { GroupType } from '../../../domain/groups';
import { calculateTotalBalance } from '../../../common/utils';
import {
  StyledButton,
  StyledItem,
  StyledSelect,
  StyledTitle,
  StyledUserContainer,
} from './styled-user-panel-components';

type UserPanelProps = {
  payments: PaymentGroupType;
  groups: GroupType[];
};

const UserPanel: React.FC<UserPanelProps> = ({ payments, groups }) => {
  const { user } = useAppContext();

  const [showPanel, setShowPanel] = useState<boolean>(true);
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
      <StyledTitle>Hi, {user}!</StyledTitle>
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
