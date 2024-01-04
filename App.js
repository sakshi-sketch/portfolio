import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './assets/NavBar';
import Banner from './assets/Banner';
import Skills from './assets/Skills';
import Projects from './assets/Projects';
import FooterOne from './assets/FooterOne';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <FooterOne/>
    </div>
  );
}

export default App;
