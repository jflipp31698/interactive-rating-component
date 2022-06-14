import styled from "styled-components";
import {Button} from "./Button";
import { SubmitButton } from "./SubmitButton";
import favImage from "./images/icon-star.svg";
import thankYou from "./images/illustration-thank-you.svg";
import {Flex} from "./Flex";
import { useState } from "react";

const RatingCard = styled.div`
    width: 400px;
    height: 400px;
    background:  linear-gradient(180deg, var(--dark-blue), hsl(216, 12%, 13%));
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    text-align: ${({align}) => align || ''};

    @media (max-width: 375px){
        width: 300px;
        height: 350px;
        padding: 20px;
        border-radius: 15px;
    }
`

const Rating = () => {
    const [hasRated, setHasRated] = useState(false);
    const [rating, setRating] = useState(null);

    const ratings = [1,2,3,4,5];

    const btnClick = (e) => {
        setRating(parseInt(e.target.innerHTML))
    }

    const center = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    if(hasRated && rating !== null){
        return (
            <RatingCard align="center" >
                <div style={center}>
                    <img src={thankYou} alt="Illustration element" style={{width: "50%", marginBottom:"30px"}}/>
                    <span style={{width: "50%", borderRadius: "20px", height: "30px"}}>
                        <p style={{color:"hsl(25, 97%, 53%)"}}>You selected {rating} out of 5</p>
                    </span> 
                </div>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </RatingCard>
        )
    }else{
        return (
            <RatingCard>
                <span>
                    <img src={favImage} alt='Favorite Icon'/>    
                </span>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
                <Flex>
                    {
                        ratings.map((value, index) =>(
                            <Button key={index} onClick={btnClick}>{value}</Button>
                        ))
                    }
                </Flex>
                <SubmitButton onClick={() => {if(rating !== null) setHasRated(true)}}>
                    SUBMIT
                </SubmitButton>
            </RatingCard>
        )
    }
}

export default Rating;