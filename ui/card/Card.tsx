import React from 'react'
import styled from 'styled-components';
import {GlobalStyles} from '../../constants'

interface Props {
    children: JSX.Element;
}

export const Card: React.FC<Props> = ({children}) => {
  return (
    <CardContainer>
        {children}
    </CardContainer>
  )
}

export default Card;

const CardContainer = styled.div`
    margin: 15px;
    width: fit-content;
    border-radius: 5px;
    box-shadow: 2px 3px 3px ${GlobalStyles.colors.offWhite};
`;