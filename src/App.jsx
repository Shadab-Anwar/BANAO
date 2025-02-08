import './App.css'
import AddYourOwn from './components/AddYourOwn';
import FeatureCards from './components/FeatureCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonialCard from './components/Testimonials';
import End from './components/End';
import Footer from './components/Footer';
import ScrollToTop from './components/GoToTop';


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <FeatureCards/>
      <AddYourOwn/>
      <TestimonialCard/>
      <End/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default App
