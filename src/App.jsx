import './App.css'
import AddYourOwn from './components/AddYourOwn';
import FeatureCards from './components/FeatureCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import End from './components/End';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import GoToTop from './components/GoToTop';


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <FeatureCards/>
      <AddYourOwn/>
      <Testimonials/>
      <End/>
      <Footer/>
      <GoToTop/>
    </>
  )
}

export default App
