import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  margin: 0 0 20px;
  @media (max-width: 768px) {
    width: 100%;
  };

  &.bg-1 {
    background-image: url('shape-header.svg');
    height: 100%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: transparent;
    background-blend-mode: color;    
  }
  &.bg-3 {
    min-height: auto;
  }
 
  &.bg-2, &.bg-4 {
    background-image: url('heart-shape.svg');
    height: 100%;
    width: 100%;
    background-size: 35%;
    background-position: bottom left;
    background-repeat: no-repeat;
    background-color: transparent;
    background-blend-mode: color;    
  }  

  &.bg-6 {
    background: url('heart-shape.svg') rgba(50, 50, 50, 0.05);
    height: 100%;
    width: 100%;
    padding: 132px 0;
    background-size: 35%;
    background-position: bottom 30% left;
    background-repeat: no-repeat;
    background-blend-mode: color;    
  }  

  &.bg-7 {
    padding: 120px 0;
    background-image: linear-gradient(to right, #42efdd, #14cfd4);
    @media (max-width: 768px) {
      padding: 20px 0;
    }
  }

`;

export const Image = styled.div`
background-image: ${(props) => `url('${props.imageUrl}')`};
height: 100%;
width: 100%;
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

export const Title = styled.h2`  
font-size: 40px;
margin-bottom: 18px;
font-weight: bold;
`;

export const List = styled.div` 
font-size: 40px;
margin-bottom: 18px;
`;

export const Links = styled.div` 
margin-bottom: 18px;
`;
export const Texts = styled.p` 
margin-bottom: 5px;
`;
export const Section = styled.section`
display: grid; 
gap: 10px;
width: 100%;
.image { grid-area: image; }
.title { grid-area: title; }
.text { grid-area: text; }
.links { grid-area: links; }
.listArea { grid-area: listArea; }

&.bg-1 {
max-width: 1140px;
color: rgb(255, 255, 255);
grid-template-columns: 1fr 1fr; 
grid-template-rows: 1fr 1; 
gap:10px 30px;  
grid-template-areas: 
  "title image "
  "text image "
  "links image "; 
  .title {
    align-self: end;
  }
  .links {
    align-self: start;
  }
  .text { 
    font-size: 20px;
    margin-bottom: 32px; 
  }  
  @media (max-width: 768px) {
    background-image: url('shape-header.svg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center bottom;
    width:100%;
    gap:0; padding: 0 20px;

  grid-template-areas: 
  "title title"
  "text text"
  "links links"; 
  }
}

&.bg-2 {  
  max-width: 1140px;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows:1 1fr ; 
  grid-template-areas: 
  "title title"
  "image listArea"; 
  .title {
    color: #666b7d;
    text-align: center;
    font-size: 40px;
  }
  @media (max-width: 768px) {
  gap:0; padding: 0 20px;
  grid-template-areas: 
  "title title"
  "listArea listArea"
  "listArea listArea"; 
  }
}

}

&.bg-3 {  
  max-width: 100%;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows:1 1fr ; 
  grid-template-areas: 
  "title title"
  "text listArea"; 
  .title {
    color: #666b7d;
    text-align: center;
    font-size: 40px;
  }
  .text {
    height: 285px;
    background: #17d9db;
    border-radius: 0 10px 10px 0;
    position: relative;
    margin-right: 0.5rem;
    display: flex;
    justify-content: flex-end;
    padding: 48px 24px 48px 45%;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 768px) {
    padding-bottom: 80px;
    min-height: 800px;
    gap:0;
    grid-auto-rows: auto;
    grid-template-areas: 
    "title title"
    "text text"
    "listArea listArea"; 

    .text {padding:20px; height:auto;}
    }  
    

}

&.bg-4 {  
  max-width: 1140px;
  grid-template-columns: 1fr 1fr ; 
  grid-template-rows:1 1fr; 

  grid-template-areas: 
  "title title"
  "image listArea"
  "image links"; 

  .title {
    color: #666b7d;
    text-align: center;
    font-size: 40px;
  }
  .text{
    color: #666b7d;
    text-align: center;
    font-size: 20px;
    padding-bottom: 40px;
  }

  @media (max-width: 768px) {
    gap:0; padding: 0 20px;
    grid-template-areas: 
    "title title"
    "listArea listArea"
    "links links"; 
    }
}

&.bg-5 {
  max-width: 1140px;
  min-height: 50vh;
  color: rgb(255, 255, 255);
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr ; 
  gap: 0px 10px; 
  grid-template-areas: 
    "title image"
    "text image"
    "text image";
      .title {
        color: #666b7d;
        font-size: 40px;
        align-self: end;
      }
      .text{
        color: #666b7d;
        font-size: 20px;
        padding-bottom: 40px;
        white-space: break-spaces;
      }
      @media (max-width: 768px) {
        gap:0; padding: 0 20px;
        grid-template-columns: 1fr 2fr; 
        grid-template-rows: 1fr 2fr ; 
        grid-template-areas: 
        "title title"
        "text text"
        "image image"; 
        .title {
          align-self: auto;
        }
        .image {height: 130px;
          width: 300px;}
        }      
  }

&.bg-6 {  
  max-width: 1140px;
  grid-template-columns: 1fr 1fr ; 
  grid-template-rows:1 1fr; 

  grid-template-areas: 
  "title title"
  "text text"
  "image listArea"
  "image links"; 

  .title {
    color: #666b7d;
    text-align: center;
    font-size: 40px;
  }
  .text{
    color: #666b7d;
    text-align: center;
    font-size: 20px;
    padding-bottom: 40px;
  }
  @media (max-width: 768px) {
    gap:0; padding: 0 20px;
    grid-template-areas: 
    "title title"
    "text text"
    "listArea listArea"
    "links links"; 
    }
}
&.bg-7 {  
  max-width: 100%;
  grid-template-columns: 1fr 2fr; 
  grid-template-rows: 1fr 1fr ; 
  grid-template-areas: 
  "text listArea"
  "text listArea"; 
  .text {
    height: 285px;
    font-weight: 500;
    line-height: 1.2;
    border-radius: 0 10px 10px 0;
    position: relative;
    margin-right: 0.5rem;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding: 48px 24px 10px 115px;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 768px) {
    padding:20px;
    min-height: 500px;
    gap:0;
    grid-template-columns: 1fr 2fr; 
    grid-template-rows: 1fr 2fr ;
    grid-template-areas: 
    "text text"
    "listArea listArea"; 

    .text {padding:20px; height:auto; text-align: center;}
    }   
    

}
`;