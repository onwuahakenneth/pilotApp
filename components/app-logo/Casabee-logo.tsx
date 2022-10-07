import React from 'react'
import styled from 'styled-components'
import {GlobalStyles} from '../../constants'
import {useRouter} from 'next/router'


export const CasabeeLogo = () => {
  const router = useRouter();
  return (
    <LogoContainer onClick={() => router.push('/')}>
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