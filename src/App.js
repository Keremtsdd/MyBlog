import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Cv from './Pages/Cv';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import PagesScrollTop from './Components/PagesScrollTop';

function App() {
  return (
    <BrowserRouter>
      <PagesScrollTop />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cv' element={<Cv />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

