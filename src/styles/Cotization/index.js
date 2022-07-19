import styled from "styled-components";

export const Form = styled.form`
    background-color: var(--ColorWhite);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    margin-bottom: 0.25rem;

  @media screen and (min-width: 720px) {
    width: 80%;
    margin: 0 auto 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
    top: 10%;
    margin: 0 auto 2.5rem;
    padding: 2.5rem 5rem;
  }
`;

export const FormContent = styled.div`
    background-color: var(--ColorWhite);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    margin-bottom: 0.25rem;

  @media screen and (min-width: 720px) {
    width: 80%;
    margin: 0 auto 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
    top: 10%;
    margin: 0 auto 2.5rem;
    padding: 2.5rem 5rem;
  }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 4px solid var(--PrimaryColor);
`;

export const FooterImage = styled.img`
  width: 100%;
  &:first-child {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 720px) {
    width: initial;
    height: 5.5rem;
    &:first-child {
      margin-bottom: 0;
    }
  }
`;

export const AditionalInformation = styled.span`
    margin-bottom: 1rem;
`;