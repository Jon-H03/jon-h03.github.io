import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Project';
import Skills from './components/Skills';
import Certifications from './components/Certification';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
            <About />
          
        
        <section id="education" className="section section-alt">
          <div className="container">
            <Education />
          </div>
        </section>
        
        <section id="experience" className="section">
          <div className="container">
            <Experience />
          </div>
        </section>
        
        <section id="projects" className="section section-alt">
          <div className="container">
            <Projects />
          </div>
        </section>
        
        <section id="skills" className="section">
          <div className="container">
            <Skills />
          </div>
        </section>
        
        <section id="certifications" className="section section-alt">
          <div className="container">
            <Certifications />
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;