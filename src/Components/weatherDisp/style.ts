import styled from "styled-components";

export const Wrapper = styled.div`
 
    max-width: 50%;
    margin:0 auto;
    display: grid;
    grid-template-columns: 100%;
    justify-content: space-around;
    padding: 0 100px;
    margin-bottom:50px;


  h2 {
    color: #808080;
  }
  h3 {
    color: #808080;
  }
`;
export const TempratureWrapper = styled.div` 
  margin: 0 auto;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  gap: 55px;
  img {
    height: 180px;
  }
  h1 {
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap:20px;
  }
  h3 {
    font-size: 20px;
    justify-content: center;
  }
`;
type viewIconsProps = {
  isCelTemp: boolean;
};
export const Span = styled.i<viewIconsProps>`
  font-size:30px;
  margin-bottom: 50px;
  
  &.is-celcius {
    ${(props) => (props.isCelTemp ? "border-bottom: 1px solid black;" : null)}
  }
  &.is-farhenhite {
    ${(props) => (!props.isCelTemp ? "border-bottom:1px solid black;" : null)}
  }
`;

export const Section = styled.section`
    margin: 60px auto;
    margin-bottom : 0 !important;
    max-width: 40%;
    display : flex;
    justify-content : center;
    flex-wrap: wrap;
    gap:30px;
`
