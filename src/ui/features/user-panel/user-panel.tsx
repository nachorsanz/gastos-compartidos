import React, { useState } from 'react';
import styled from '@emotion/styled';
import GroupPanel from '../group-panel/group-panel-component';

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


const UserPanel: React.FC = () => {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  const handleShowPanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div data-testid="user-panel">
      <StyledTitle>Hi, user!</StyledTitle>
      <StyledGroupComponent>
        <StyledGroupComponentContainer>
          <StyledItem>Estás en 5 grupos</StyledItem>
         

          <StyledItem>Total 345.45€</StyledItem>
        </StyledGroupComponentContainer>
          <StyledButton onClick={handleShowPanel}>{showPanel ? 'Cerrar': 'Ampliar'}</StyledButton>
        {showPanel && <GroupPanel />}
      </StyledGroupComponent>
    </div>
  );
};

export default UserPanel;
