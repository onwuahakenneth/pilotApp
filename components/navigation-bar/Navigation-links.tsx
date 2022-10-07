import React from 'react'
import styled from 'styled-components';
import {LinkItem} from './Link-item';

interface Props{

}

export const NavLinks: React.FC<Props> = (props) => {

    return (
        <LinkList>
            <LinkItem 
                href='/about'
                title='About Us'
            />
            <LinkItem 
                href='/services'
                title='Services'
            />
        </LinkList>
    )
}

export default NavLinks;

const LinkList = styled.ul`
    list-style: none;
    height: 100%;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 10px;
`;