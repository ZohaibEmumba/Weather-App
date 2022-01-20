import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 1400px) {
    max-width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100%;
    padding: 0 100px;
  }

  h2 {
    color: #808080;
  }
  h3 {
    color: #808080;
  }
`;
export const TempratureWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 25% 18% 1fr;

  img {
    height: 150px;
  }
  h1 {
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 30px;
    cursor: pointer;
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
  &.is-celcius {
    ${(props) => (props.isCelTemp ? "border-bottom: 1px solid black;" : null)}
  }
  &.is-farhenhite {
    ${(props) => (!props.isCelTemp ? "border-bottom:1px solid black;" : null)}
  }
`;
