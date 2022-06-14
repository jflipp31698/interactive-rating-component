import { createGlobalStyle } from "styled-components"; 

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.google.com/specimen/Overpass');

    :root{
        --orange: hsl(25, 97%, 53%);
        --white: hsl(0, 0%, 100%);
        --light-grey: hsl(217, 12%, 63%);
        --medium-grey: hsl(216, 12%, 54%);
        --dark-blue: hsl(213, 19%, 18%);
        --very-dark-blue: hsl(216, 12%, 8%);
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background: var(--very-dark-blue);
        color: var(--light-grey);
        font-family: Overpass, sans-serif;
        overflow: hidden;
    }

    h1{
        color: var(--white);
        font-weight: 700;
    }

    p{
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5em;
    }

    span{
        background: var(--dark-blue);
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .active{
        color: var(--white);
        background: var(--orange);
    }

    @media (max-width: 375px){
        h1{
            font-size: 1.5em;
            font-weight: 400;
        }

        p{
            font-size: 12px;
        }

        span{
            width: 40px;
            height: 40px;
        }
        span > img{
            width: 15px;
            height: 15px;
        }
    }
`
export default GlobalStyles;