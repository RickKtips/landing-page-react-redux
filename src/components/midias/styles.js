import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: right;
    gap: 10px;
    position: relative;
`;

export const ImageIcon = styled.div`
background-image: ${(props) => `url('${props.imageUrl}')`};
height: 40px;
width: 40px;
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