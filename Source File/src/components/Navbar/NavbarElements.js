import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll' 

export const Nav = styled.nav`
   background: #3EB489;
   height: 80px;
   //margin-top: -80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   @media screen and (max-width: 960px){
       transition: 0ms.8s all case;
   }
`

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 38px;
   display: flex;
   align-items: center;
   margin-left: -28px;
   font-weight: bold;
   text-decoration: none;
   font-family: "Papyrus", "Copperplate", Fantasy;
`;

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px){
      display: block;
      position: absolute;
      padding: 22px 22px;
      top: 0;
      right: 0;
      transform: translate(-100, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
   }
`;

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;
   

   @media screen and (max-width: 768px){
      display: none;
   }
`;

export const NavItem = styled.li`
   height: 80px;
`;

export const NavLinks = styled(LinkS)`
   color: #0C090A;
   display: flex;
   align-items: center;
   text-decoration: none;
   font-size: 18px;
   font-weight: bold;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

   &.active{
      border-bottom: 3px solid #01bf71;
   }
`;

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px){
      display: none;
   }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #C3FDB8;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border-style: solid;
    border-color: #64E986;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    &.hover{
       transition: all 0.2s ease-in-out;
       background: #fff;
       color: #010606;
    }
`