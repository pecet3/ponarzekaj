import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";


export const Wrapper = styled.nav`
    background-color: ${({ theme }) => theme.elements.navigationBackground};
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Li = styled.li`
    padding: 10px;
    text-align: left;

    ${({ displayUpright }) => displayUpright && css`
        padding: 8px 2px;
    `}
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.elements.navigationText};
    transition: color 0.4s;
    &:visited{
        text-decoration: none;
        color: ${({ theme }) => theme.elements.navigationText};
        
        &.active{
        color: ${({ theme }) => theme.elements.header};
        }
    }
`;

export const DropDownContainer = styled.div`
    
    position: relative;
    &:hover{
        cursor: pointer;
    }
`;

export const DropDownLink = styled(StyledNavLink)`
    padding-bottom: 9px;

    ${({ upright }) => upright && css`

        color: ${({ theme }) => theme.elements.text};
        &:visited{
            color: ${({ theme }) => theme.elements.text};
        }
    `}
`;

export const List = styled.ul`
    position: absolute;
    list-style: none;
    padding: 0;
    width: 94px;
    top: 155%;
    display: none;
    background-color: ${({ theme }) => theme.elements.headerBackground};
    
    ${DropDownContainer}:hover & {
        display: grid;
        
    }
`;
