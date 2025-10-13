import './App.css';
import Footer from './components/Footer.jsx';
import HeaderName from "./components/Header.jsx";
import Note from './components/Note.jsx';

function App() {
  return (
    <div className="app-container">
      <HeaderName className="oswald-400 headerBackgroundClassName" />
      <Note classForNoteDivs="classForNoteDivs" />
      <Footer className="footerClassName" />
    </div>
  )
}

export default App;
