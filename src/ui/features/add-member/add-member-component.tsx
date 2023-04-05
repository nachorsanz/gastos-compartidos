import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GroupType } from '../../../domain/groups';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  padding: 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
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
            data-testid="add-member-select"
            onChange={handleGroupSelect}
          >
            <option value="">Select Group</option>
            {groupsState.map((group, index) => (
              <option key={group.name} value={index}>
                {group.name}
              </option>
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
