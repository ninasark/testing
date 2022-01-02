import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { isMobile } from "react-device-detect";
import Galary from "./pages/Galary";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/about-me" element={<About />} />
              <Route
                path="/galary"
                element={isMobile ? <Galary /> : <Navigate to="/" />}
              />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
