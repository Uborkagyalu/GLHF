import { createTheme } from "@mui/material";
import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./Layouts/Layout";

const theme = createTheme({
  typography: {
    fontFamily: ['"papyrus"', '"Impact"'].join(","),
  },
});

function App({ main }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout main={main} />
    </ThemeProvider>
  );
}

export default App;
