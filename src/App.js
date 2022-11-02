import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";


const PageCss = styled.div``;

const App = () => {
  return (
    <>
      <PageCss>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageCss>
    </>
  );
};

export default App;