import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home.js';
import { User } from './components/user/userProfile';
import { About } from './components/about/about.js';
import { NotFound } from './components/not-found/notFound.js';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='user' element={<User/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='notfound' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
