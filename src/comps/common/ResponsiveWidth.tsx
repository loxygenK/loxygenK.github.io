import styled from "styled-components";

export const ResponsiveWidth = styled.div`
  vertical-align: top;
  padding-bottom: 2em;

  @media screen and (min-width: 800px) {
    display: inline-block;
    box-sizing: border-box;

    padding-right: 2em;
  }

  @media screen and (min-width: 800px) {
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    width: 33%;
  }
`;
