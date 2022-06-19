import './App.css';
import Home from './components/home/Home';
import Table from './components/table/Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="App">
        <>
        <Routes>
          <Route exact path='/' element={<Home/>}/>       

          <Route exact path='/league' element={<Table/>}/>
          
        </Routes>
        </>
    </div>
  </Router>

  );
}

export default App;
