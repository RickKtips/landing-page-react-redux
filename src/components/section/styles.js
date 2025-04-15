import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction:column;
width: 100%;
position:relative;
margin-top: 74px;
align-items: center;
font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
