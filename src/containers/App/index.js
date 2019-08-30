import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../commons/Theme/index";
import GlobalStyle from "../../commons/Theme/global-styles";
import AdminPage from "../../containers/AdminPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AdminPage />

        {/* GLOBAL STYLE FOR APP */}
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
