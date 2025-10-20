import './App.css';
import Footer from './components/Footer.jsx';
import HeaderName from "./components/Header.jsx";
import Note from './components/Note.jsx';
import notes from './components/notes.js';

function App() {

  const newNotes = notes.map(x => <Note
    key={x.key}
    title={x.title}
    content={x.content}
  />);

  return (
    <div className="app-container">
      <HeaderName className="oswald-400 headerBackgroundClassName" />
      {newNotes}
      <Footer className="footerClassName" />
    </div>
  )
}

export default App;
