import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ListGroup from './components/ListGroup';
import NavBar from "./components/NavBar";
import ProjectGallery from "./pages/ProjectGallery";
import Home from "./pages/Home";
//import Links from './pages/Links';
import Projects from './pages/Projects';
import Wrapper from "./components/Wrapper";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Wrapper>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/projectGallery" element={<ProjectGallery />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projectGallery" element={<ProjectGallery />} />
              <Route path="/about" element={<About />} />

            </Routes>
          </Wrapper>
        </div>
      </Router>
    </>
  );
}

export default App;
