import styled from "styled-components";

export const SubmitButton = styled.button`
    width: 100%;    
    height: 50px;
    border: none;
    border-radius: 30px;
    background: hsl(25, 97%, 53%);
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    letter-spacing: .1em;

    &:hover {
        background: hsl(0, 0%, 100%);
        color: hsl(25, 97%, 53%);
        cursor: pointer;
    }

    &:active {
        cursor: pointer;
    }

    @media (max-width: 375px){
        height: 40px;
    }
`