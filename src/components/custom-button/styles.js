import styled from "styled-components";

export const CustomButtonContainer = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
width: 100%;

  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 400;
  color: #666b7d;

  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-color: #000000;
 
  padding: 0.6rem 1.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  border-radius: 0.6rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #396cea;
    border-color: #2e64e9;
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ImageIcon = styled.div`
background-image: ${(props) => `url('${props.imageUrl}')`};
height: 30px;
width: 30px;
margin-right: 15px;  
background-size: contain;
background-repeat: no-repeat;
background-position: center;
background-color: transparent;
background-blend-mode: color;
text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
@media (max-width: 768px) {
}
`;