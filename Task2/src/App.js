import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import ScrollToTop from './scripts/scrollToTop';

import {NavBar} from './pages/components/Navigation';
import {PageFooter} from './pages/components/footerPage';
import {HomePage} from './pages/homePage';
import {PricingPage} from './pages/pricing';
import {ContactUs} from './pages/contactUs';

import './css/main.css';
import './css/App.css';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>

        <PageFooter />
      </Router>
    </>
  );
}

export default App;