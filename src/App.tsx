import React from "react";
import styled from "styled-components";
import { Color } from "data/Value";
import { Header } from "pages/header/Header";
import { AppRouter } from "./pages/Router";
import { NavigatesTo } from "./data/NavigatesTo";

const ReactApp = styled.div`
  background-color: ${Color.black};
  color: ${Color.white};
  min-height: 100vh;
  font-size: 150%;
`;

const FixedHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 3em;
`;

const ContentWrapper = styled.div`
  margin: 3em 0 0;
`;

function App() {
  return (
    <ReactApp>
      <FixedHeader className="App-header">
        <Header navigatesTo={NavigatesTo} />
      </FixedHeader>
      <ContentWrapper>
        <AppRouter />
      </ContentWrapper>
    </ReactApp>
  );
}

export default App;
