import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    z-index: 50;
    heaight: 75px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.2s all ease-out;
    background: #14cfd4;
`;

export const Header = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    width: 100%;
    padding: 15px 0;
    @media (max-width: 768px) {
      justify-content: center;
    }
`;

 export const Image = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 44px;
  width: 205px;
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