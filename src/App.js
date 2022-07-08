import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Destination from './Components/Destination';
import Search from './Components/Search';
import Select from './Components/Select';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination/>
      <Search/>
      <Select/>
      <Carousel/>
      <Footer/>
    </>
  );
}

export default App;
