import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 50px;
`;

export const Footer = styled.footer`
display: grid;
max-width: 1140px;
padding-top: 100px;
grid-template-columns: 1fr 1fr ; 
grid-template-rows:1 1fr; 

.image { grid-area: image; }
.midias { grid-area: midias; }
.menu { grid-area: menu; }
.text { grid-area: text; }

grid-template-areas: 
"image midias"
"image midias"
"menu text"
"menu text"; 

@media (max-width: 768px) {
  gap:20px;
  padding:0 20px;
  grid-template-areas: 
  "image image"
  "midias midias"
  "text text"
  "text text"; 
}

`;

 export const Image = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 44px;
  width: 205px;
  margin-bottom: 20px;
  background-size: cover;
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

export const Midias = styled.div`
display: flex;
justify-content: flex-end;
@media (max-width: 768px) {
  justify-content: center;
}

`;
export const Menu = styled.div`
display: flex;
@media (max-width: 768px) {
  display: none;
}
`;

export const Text = styled.div`
display: flex;
flex-direction: column;
p{font-size: 14px;
  color: rgba(0, 8, 38, 0.6);
  padding-bottom: 20px;
}


`;