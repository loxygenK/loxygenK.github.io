import React from "react";
import styled from "styled-components";
import { Color } from "data/Value";
import { Header } from "pages/header/Header";
import { AppRouter } from "./pages/Router";
import { NavigatesTo } from "./data/NavigatesTo";
import { Drawer } from "./pages/drawer/Drawer";

const ReactApp = styled.div`
  background-color: ${Color.black};
  color: ${Color.white};
  min-height: calc(100vh - 2em);
  font-size: 150%;
`;

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 4.5rem;
`;

const ContentWrapper = styled.div`
  margin: 3rem 0 0;
  padding: 4.5rem 1em;

  @media screen and (max-width: 450px) {
    font-size: 0.7em;
  }
`;

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <ReactApp>
      <FixedHeader className="App-header">
        <Header
          navigatesTo={NavigatesTo}
          onDrawerOpen={() => setDrawerOpen(!drawerOpen)}
        />
      </FixedHeader>
      <Drawer
        isOpen={drawerOpen}
        pages={NavigatesTo}
        onClosed={() => setDrawerOpen(false)}
      />
      <ContentWrapper>
        <AppRouter />
      </ContentWrapper>
    </ReactApp>
  );
}

export default App;
