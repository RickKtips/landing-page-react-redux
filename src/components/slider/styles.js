import styled from "styled-components";

export const SliderContainer = styled.div`
display:block;
width: 710px;  
height: 100px;
@media (max-width: 768px) {
  width: 100%;  
}
`;

export const SliderContainerBlock = styled.div`
display: flex;
min-height: 285px;
border-radius: 20px 20px 20px 0px; 
background: #fff;
padding: ${props => props.secTheme ? "20px" : "0"};

`;

export const Image = styled.div`
background-image: ${(props) => `url('${props.imageUrl}')`};
width: 355px;  
height: 285px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
background-color: transparent;
background-blend-mode: color;
@media (max-width: 768px) {
}
`;

export const Text = styled.p`
font-size:20px;
color: #00082699;
display: ${props => props.secTheme ? "flex" : "none"};
`;
export const Name = styled.p`
font-size:20px;
color: #fff;
padding-top: 10px;
`;

export const SlideItem = styled.div`
display:inline-block;
padding: 0 10px;
width: 355px;  
height: 285px;

`;

export const SlideControl = styled.div`
display:flex;
position: absolute;
z-index: 5;
margin: 200px 0 0 -150PX; 
width: 100px;  
height: 80px;
`;

export const BtnControl = styled.button`
cursor: pointer;
width: 40px;
height: 40px;
margin-left: 10px;
background: none;
border: none;
font-size: 0;
background-size: 100%;
background-repeat: no-repeat;
outline: none !important;
border-radius: 50%;
`;

export const IconButton = styled.div`
background-image: ${(props) => `url('${props.imageUrl}')`};
width: 40px;  
height: 40px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
background-color: transparent;
background-blend-mode: color;
@media (max-width: 768px) {
}
`;
