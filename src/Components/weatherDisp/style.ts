import styled from "styled-components";

export const Wrapper = styled.div` 
    display: grid;
    grid-template-columns: 50% ;
    grid-gap: 10px;
    justify-content: center;
    padding : 0 100px;

    h2{
        color: #808080;
    }
    h3{
        color: #808080; 
    }
    
`
export const TempratureWrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 10% auto;
    img{
        height: 150%;
    }
    h1{
        font-size:60px;
        display: grid;
        justify-content: center;
        align-content: center;
        height: 150%;
    }
    h2{
        font-size:30px;
        height: 150%;
        margin-top: 10%;
        cursor : pointer;
    }
    h3{
        font-size:20px;
        height: 150%;
        display: grid;
        justify-content: center;
        align-content: center;
        
    }

`