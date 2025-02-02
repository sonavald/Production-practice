import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './scripts/scrollToTop';
import blogs from "./blogs.json";

import { HomePage } from "./pages/homePage";
import { BlogCategories } from "./pages/categories";
import { Header } from './pages/components/header';
import { BlogDetail } from "./pages/blog-detail";
import { createContext } from "react";

const MONTHS = [
  " Jan ", " Feb ", " Mar ", " Apr ", " May ", " Jun ",
  " Jul ", " Aug ", " Sep ", " Oct ", " Nov ", " Dec "
];

export function monthConvert(date) {
  const [year, month, day] = date.split("-");
  const monthName = MONTHS[parseInt(month, 10) - 1];
  return `${day} ${monthName} ${year}`;
};

export const blogsContext = createContext();

function App() {
  return (
    <>

      <blogsContext.Provider value={blogs}>

        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="blog-categories" element={<BlogCategories />} />
            <Route path="blog-detail/:id" element={<BlogDetail />} />
            <Route path="blog-categories/blog-detail/:id" element={<BlogDetail />} />


          </Routes>
        </Router>

      </blogsContext.Provider>
    </>
  );
}

export default App;