import React from 'react'
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {GlobalStyles} from '../../constants';


interface Props {
    href: string;
    title: string;
    onClick: () => void;
}

export const LinkItem: React.FC<Props> = (props) => {
    const {href, title, onClick} = props;
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
        onClick();
    }
    return (
        <LinkContainer onClick={() => router.push(href)}>
                <LinkText>{title}</LinkText>
        </LinkContainer>
    )
}

export default LinkItem;

const LinkContainer = styled.li`
    height: 100%;
    padding: 0px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
        border-bottom: 2px solid ${GlobalStyles.colors.primary500};
    }
    &:hover > p {
        color: ${GlobalStyles.colors.defaultBlack};
    }
    @media screen and (max-width: 780px){
           display: none;
    }
`;

const LinkText = styled.p`
    color: ${GlobalStyles.colors.darkGray};
    transition: all 0.3s linear;
`;
