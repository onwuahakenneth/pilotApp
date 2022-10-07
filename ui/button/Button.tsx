import React from 'react'
import styled from 'styled-components';
import {GlobalStyles} from '../../constants'

interface Props {
    title: string;
    onClickHandler: () => void;
    bgColor?: string;
    padding?: string;
    resizable?: boolean;
}

export const Button: React.FC<Props> = (props) => {
    const {onClickHandler, title, bgColor, padding, resizable} = props;

    const buttonProps = {bgColor, padding};

    return (
        <ButtonElement
            onClick={onClickHandler}
            {...buttonProps}
        >
            <Text resizable={resizable}>{title}</Text>
        </ButtonElement>
    )
}

export default Button

const ButtonElement = styled.button<{bgColor?: string; padding?: string;}>`
    border: none;
    outline: none;
    background-color: ${GlobalStyles.colors.primary500};
    padding: 15px 25px;
    border-radius: 30px;
    cursor: pointer;
`;

const Text = styled.p<{resizable?:boolean}>`
        color: #fff;
        font-size: 16px;
        transition: font-size 0.2s linear;

        @media screen and (max-width: 780px){
            font-size: ${({resizable}) => resizable ? '90%' : '100%'};
        }
        
        @media screen and (max-width: 580px){
            
            font-size: ${({resizable}) => resizable ? '65%' : '100%'};
            padding: ${({resizable}) => resizable ? '0' : '15px 25px'};
        }


`;
