import './App.css';
import Courses from './components/Courses/Courses';
import Footter from './components/Footter/Footter';
import Layout from './components/Layout';
import NavBar from './components/NavBar/NavBar';
import Proyects from './components/Proyects/Proyects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <NavBar/>
      <Layout/>
      <Courses/>
      <Proyects/>
      <Skills/>
      <Footter/>
    </>
  )
}

export default App;
