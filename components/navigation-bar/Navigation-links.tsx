import React, {useContext} from 'react'
import styled from 'styled-components';
import {LinkItem} from './Link-item';
import {useRouter} from 'next/router';
import MenuContext from '../../context/MenuContext';

interface Props{

}

export const NavLinks: React.FC<Props> = (props) => {
    const {closeMenu} = useContext(MenuContext);
    return (
        <LinkList>
            <LinkItem 
                href='/about'
                title='About Us'
                onClick={closeMenu}
            />
            <LinkItem 
                href='/services'
                title='Services'
                onClick={closeMenu}
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