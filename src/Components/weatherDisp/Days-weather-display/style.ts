import styled from "styled-components";

export const Section = styled.div` 
    padding: 0;
    max-width: 150px;
    margin-bottom: 200px;
    display: grid;
    justify-content: center;
    border: 2px solid lightgray;
    background-color: beige;
    padding: 0px 40px;

    img{
     width:100px;   
    }

    h2{
        display: grid;
        justify-content: center;
    }
    div{
        margin-left: 5px;

        &.celcius-class{
            color: orange;
        }

    }
   

`