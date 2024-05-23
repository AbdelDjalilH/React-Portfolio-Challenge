
// import './App.css';
import './app.scss'
import HomePage from './pages/HomePage';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return(
  <>  
  <Navbar/>
   <Outlet/> 
  <Footer/>

  </>
)}
  
export default App;
