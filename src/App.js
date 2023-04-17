
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          <Sidebar />
          <Home />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
