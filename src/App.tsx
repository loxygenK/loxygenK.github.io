import React from "react";
import styled from "styled-components";
import { Color } from "data/Value";
import { Header } from "comps/header/Header";
import { AppRouter } from "./comps/Router";

const ReactApp = styled.div`
  background-color: ${Color.black};
  color: ${Color.white};
  height: 100vh;
  font-size: 150%;
`;

function App() {
  return (
    <ReactApp>
      <header className="App-header">
        <Header />
      </header>
      <AppRouter />
    </ReactApp>
  );
}

export default App;
