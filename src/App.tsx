//import './App.css'
import Navbar from "./components/Navbar/Index";
import Router from "./Routes/Routes";
import { Suspense, useContext, useState } from "react";
import Loading from "./components/Loading/Loading";
import { ThemeProvider } from "@mui/material/styles";
import { changeTheme } from "./theme/index";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeContext from "./components/Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={changeTheme(theme)}>
      <CssBaseline />
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Router />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
