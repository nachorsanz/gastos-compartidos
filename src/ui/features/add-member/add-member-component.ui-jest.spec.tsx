/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AddMemberForm from './add-member-component';
import { createGroups } from '../../../api/mock/mock-factory';

describe('AddMemberForm component', () => {
  const groups = createGroups();

  it('should render AddMemberForm component', () => {
    const { getByTestId } = render(
      <AddMemberForm groupsState={groups} handleUpdateGroups={() => {}} />,
    );
    expect(getByTestId('add-member-component')).toBeInTheDocument();
  });

  it('should render AddMemberForm with input name', () => {
    const { getByTestId } = render(
      <AddMemberForm groupsState={groups} handleUpdateGroups={() => {}} />,
    );
    expect(getByTestId('add-member-name')).toBeInTheDocument();
  });

  it('should render AddMemberForm with select group', () => {
    const { getByTestId } = render(
      <AddMemberForm groupsState={groups} handleUpdateGroups={() => {}} />,
    );
    expect(getByTestId('add-member-select')).toBeInTheDocument();
  });

  it('should render AddMemberForm with ver miembros link', () => {
    const { getByTestId } = render(
      <AddMemberForm groupsState={groups} handleUpdateGroups={() => {}} />,
    );
    expect(getByTestId('add-member-link')).toBeInTheDocument();
  });

  it('should render AddMemberForm with add button', () => {
    const { getByTestId } = render(
      <AddMemberForm groupsState={groups} handleUpdateGroups={() => {}} />,
    );
    expect(getByTestId('add-member-button')).toBeInTheDocument();
  });
});
