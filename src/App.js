import { createTheme } from "@mui/material";
import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./Layouts/Layout";
import CharacterProvider from "./providers/characterProvider";

const theme = createTheme({
  typography: {
    fontFamily: ['"papyrus"', '"Impact"'].join(","),
  },
});

function App({ main }) {
  return (
    <ThemeProvider theme={theme}>
      <CharacterProvider>
        <Layout main={main} />
      </CharacterProvider>
    </ThemeProvider>
  );
}

export default App;
