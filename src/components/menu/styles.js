import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

export const Menu = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
position: relative;
list-style-type: none;
padding: 0;
margin: 0;
li{
    width: 100%;
}
`;

export const MenuItem = styled.a`
display: block;
font-size: 18px;
font-weight: 500;
color: rgba(0, 8, 38, 0.4);
transition: 0.4s all ease-out;
`;