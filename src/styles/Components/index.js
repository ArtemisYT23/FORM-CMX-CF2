import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  font-size: 0.9rem;
  background-color: #d0d5e8;
  color: var(--PrimaryColor);
  justify-content: center;
  height: 2.3rem;
  
`;

export const Container1Col = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`;

export const SendButton = styled.div`
  padding: 0.7rem;
  width: 20%;
  font-size: 1.2rem;
  text-align: center;
  background-color: var(--PrimaryColor);
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #3145D6;
  }
`;

export const Container1ColFile = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
`;

export const Container2Col = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
`;

export const ContainerIconD = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  padding: 2rem;
  &:hover {
    background-color: #c4c4c4;
  }
`;

export const ContainerIconI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  padding: 2rem;
  &:hover {
    background-color: #c4c4c4;
  }
`;

export const LabelInput = styled.label`
  height: ${props => props.height};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 0.8rem;
  margin: 0 0 0.2rem 0;
`;

export const TextArea = styled.textarea`
  margin-top: 0.5rem;
  outline: none;
  width: 100%;
  height: 8rem;
  padding: 1rem 1rem;
  resize: none;
  color: var(--PrimaryColor);
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

export const MessageError = styled.div`
  background-color: var(--PrimaryColor);
  color: white;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;