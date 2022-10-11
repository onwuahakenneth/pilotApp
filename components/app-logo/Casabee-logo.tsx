import React, {useContext} from 'react'
import styled from 'styled-components'
import {GlobalStyles} from '../../constants'
import {useRouter} from 'next/router'
import MenuContext from '../../context/MenuContext'


export const CasabeeLogo = () => {
  const router = useRouter();
  const {closeMenu} = useContext(MenuContext);

  const onClickHandler = () => {
    router.push('/');
    closeMenu();
  }
  return (
    <LogoContainer onClick={onClickHandler}>
        <BoldText>Casabee</BoldText>
    </LogoContainer>
  )
}

export default CasabeeLogo

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const BoldText = styled.p`
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    color: ${GlobalStyles.colors.primary500};
    cursor: pointer;
`;