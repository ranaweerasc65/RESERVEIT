import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <div className="AppGlass">
        <Sidebar/>  
        <MainDash/>
        <RightSide/>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;

