import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import HeroSection from './components/HeroSection';
import AboutUS from './components/AboutUS';
import Get from './components/Get';
import AynMedia from './components/AynMedia';
import Testimonials from './components/Testimonials';
import CallAction from './components/CallAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUS />
      <Get />
      <AynMedia />
      <Testimonials />
      <CallAction />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
