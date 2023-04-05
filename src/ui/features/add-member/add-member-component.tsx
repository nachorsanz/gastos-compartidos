import React, { useState } from 'react';
import { GroupType } from '../../../domain/groups';
import {
  StyledButton,
  StyledCard,
  StyledForm,
  StyledGroupCard,
  StyledGroupMember,
  StyledGroupMembers,
  StyledInput,
  StyledSelectOption,
  StyledSelect,
  StyledTitleLink,
} from './styled-add-member-components';

type AddMemberFormProps = {
  groupsState: GroupType[];
  handleUpdateGroups: (groupsState: GroupType[]) => void;
};

const AddMemberForm: React.FC<AddMemberFormProps> = ({
  groupsState,
  handleUpdateGroups,
}) => {
  const [name, setName] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<GroupType>();
  const [shownMembers, setShownMembers] = useState<boolean>(false);

  const toggleShownMembers = () => {
    setShownMembers(!shownMembers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedGroups: GroupType[] = groupsState.map((group) => {
      if (group.name === selectedGroup?.name) {
        return {
          ...group,
          members: [...group.members, name],
        };
      }
      return group;
    });
    handleUpdateGroups(updatedGroups);
    setSelectedGroup(
      updatedGroups.find((group) => group.name === selectedGroup?.name),
    );
  };

  const handleGroupSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const groupIndex = parseInt(e.target.value);
    setSelectedGroup(groupsState[groupIndex]);
  };

  return (
    <div data-testid="add-member-component">
      <StyledForm onSubmit={handleSubmit}>
        <StyledCard>
          <StyledInput
            data-testid="add-member-name"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <StyledSelect
            id="add-member-select"
            data-testid="add-member-select"
            onChange={handleGroupSelect}
          >
            <StyledSelectOption value="">Select Group</StyledSelectOption>
            {groupsState.map((group, index) => (
              <StyledSelectOption key={group.name} value={index}>
                {group.name}
              </StyledSelectOption>
            ))}
          </StyledSelect>

          <StyledTitleLink
            data-testid="add-member-link"
            onClick={toggleShownMembers}
          >
            Ver miembros
          </StyledTitleLink>

          <StyledButton
            data-testid="add-member-button"
            type="submit"
            className="add-button"
          >
            +
          </StyledButton>
        </StyledCard>
        {shownMembers && selectedGroup && (
          <StyledGroupCard data-testid="add-member-group-component">
            <StyledGroupMembers data-testid="group-member">
              {selectedGroup.members.map((member) => (
                <StyledGroupMember key={member}>{member}</StyledGroupMember>
              ))}
            </StyledGroupMembers>
          </StyledGroupCard>
        )}
      </StyledForm>
    </div>
  );
};

export default AddMemberForm;
