import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 90vh;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
          <Body>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Wrapper>
            <Education />
            <Contact />
            </Wrapper>
            <Projects />
            <Footer />
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
