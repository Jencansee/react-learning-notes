import styled from "styled-components";

export const StyledButton = styled.button`
  font: inherit; cursor: pointer;
  padding: 1rem 2rem; transition: .3s background-color ease-in-out; border-radius: 12px;
  font-size: 1.1rem; color: white; font-weight: 500; border: none;
  background-color: #217F90;
  width: ${props => props.btnWidth ? props.btnWidth : 'fit-content'};
  margin: ${ props => props.margin || null };

  & + & { margin-left: 1rem; }
  &:hover, &:active { background-color: #267481; }
`;

export const StyledButtonCancel = styled(StyledButton)`
  background-color: #b95a5a;
  &:hover, &:active { background-color: #b95252; }
`;