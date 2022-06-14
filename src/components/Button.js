import styled from "styled-components";

export const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: ${({rad}) => rad || '50%'};
    width: ${({width}) => width || '' };
    background: ${({bg}) => bg || 'hsl(213, 19%, 22%)'};
    color: ${({color}) => color || 'hsl(217, 12%, 63%)'};

    &:hover {
        color: ${({color}) => color || 'hsl(0, 0%, 100%)'};
        background: ${({bg}) => bg || 'hsl(217, 12%, 63%)'};
        cursor: pointer;
    }

    &:active {
        color: hsl(0, 0%, 100%);
        background: hsl(25, 97%, 53%);
        cursor: pointer;
    }

    @media (max-width: 375px){
        width: 40px;
        height: 40px;
    }


`