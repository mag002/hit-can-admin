import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../commons/Theme/index";
import Navbar from "../../components/Navbar";
import { Route } from "react-router-dom";
import ChallengeTable from "../ChallengeTable";
import GlobalStyle from "../../commons/Theme/global-styles";
import AdminPage from "../../containers/AdminPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Navbar />
        <Route exact path="/" render={() => <h1>HELLO</h1>} />
        <Route path="/challenge" component={ChallengeTable} />
        */}
        <AdminPage />

        {/* GLOBAL STYLE FOR APP */}
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
