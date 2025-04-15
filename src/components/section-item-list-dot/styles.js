import styled from "styled-components";

export const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between; 
  flex-grow: 4;
  gap: 15px; 
  flex-wrap:no-wrap;
  padding-bottom: 20px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.div`
background-image: ${(props) => `url('${props.imageUrl}')`};
height: 80px;
width: 80px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
background-color: transparent;
background-blend-mode: color;
@media (max-width: 768px) {
}
`;

export const Text = styled.p`
color: #666b7d;
font-size: 20px;
font-weight: 400;
width: calc(100% - 100px);

`;