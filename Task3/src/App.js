import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import ScrollToTop from './scripts/scrollToTop';
import { ClickEvent } from "./scripts/copingColor";

import { HomePage } from "./pages/palletes";
import { BigPallete } from "./pages/components/bigPallete";

import "./css/anim.css";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <ClickEvent/>
  
        <div id="animation"></div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="pallete/:id" element={<BigPallete/>}/>
        </Routes>

        
      </Router>
    </>
  );
}

export default App;