import React from 'react'
import styled from 'styled-components'
import {LinkItem} from './Link-item'
import {Button} from '../../ui/button'
import {FaBars, FaTimes} from 'react-icons/fa'
import {GlobalStyles} from '../../constants'

interface Props{
  menuToggeleHandler: () => void;
  menuOpen: boolean;
}

export const NavigationActions: React.FC<Props> = (props) => {
  const {menuToggeleHandler, menuOpen} = props;

  return (
    <Container>
        <Button 
            onClickHandler={() => {}}
            title='Download App'
            resizable={true}
        />
        <MenuBar onClick={menuToggeleHandler}>
          {
            menuOpen ? <FaTimes /> :     <FaBars />
          }
        </MenuBar>
    </Container>
  )
}

export default NavigationActions;

const Container = styled.div`
    height: 100%;
    width: 400px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end
`;

const MenuBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${GlobalStyles.colors.darkGray};
  cursor: pointer;
  padding-left: 10px;
  font-size: 18px;
  @media screen and (min-width: 780px){
    display: none;
  }
`;
