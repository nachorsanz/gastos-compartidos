import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GroupType } from '../../../domain/groups';

const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;

  @media (max-width: 700px) {
    min-width: 250px;
  }
`;

const StyledSelect = styled.select`
  padding: 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;

const SelectOption = styled.option`
  font-size: 16px;
  background: #fff;
  &:hover {
    background: #e0f2f7;
  }
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
  max-width: 600px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

const GroupCard = styled(Card)`
  cursor: pointer;
`;

const GroupName = styled.h4`
  margin: 0 0 0.5rem;
`;

const GroupMembers = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const GroupMember = styled.li`
  margin-bottom: 0.25rem;
`;

const StyledTitleLink = styled.p`
  margin: 0;
  padding: 0;
  color: #0077cc;
  cursor: pointer;
`;
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
      <Form onSubmit={handleSubmit}>
        <Card>
          <Input
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
            <SelectOption value="">Select Group</SelectOption>
            {groupsState.map((group, index) => (
              <SelectOption key={group.name} value={index}>
                {group.name}
              </SelectOption>
            ))}
          </StyledSelect>

          <StyledTitleLink
            data-testid="add-member-link"
            onClick={toggleShownMembers}
          >
            Ver miembros
          </StyledTitleLink>

          <Button
            data-testid="add-member-button"
            type="submit"
            className="add-button"
          >
            +
          </Button>
        </Card>
        {shownMembers && selectedGroup && (
          <GroupCard data-testid="add-member-group-component">
            <GroupName>{selectedGroup.name}</GroupName>
            <GroupMembers data-testid="group-member">
              {selectedGroup.members.map((member) => (
                <GroupMember key={member}>{member}</GroupMember>
              ))}
            </GroupMembers>
          </GroupCard>
        )}
      </Form>
    </div>
  );
};

export default AddMemberForm;
