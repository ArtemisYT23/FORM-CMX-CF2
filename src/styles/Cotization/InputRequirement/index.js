import styled from "styled-components";

export const Input = styled.input`
  display: ${props => props.display };
`;

export const LabelInput = styled.label`
  height: ${props => props.height};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const Selected = styled.select`
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  background-color: var(--ColorWhite);
  border: 2px solid var(--PrimaryColor);
  margin-top: 1rem;
  font-weight: 600;
  color: var(--PrimaryColor);
`;