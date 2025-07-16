import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import L from './components/L';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Addstudent/> } />
        <Route path='/search' element={ <Search/> } />
        <Route path='/delete' element={<Delete/>} />
        <Route path='/view' element={<Viewall/>} />
        <Route path='/add' element={<Addstudent/>} />
        <Route path='/l'element={<L/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
