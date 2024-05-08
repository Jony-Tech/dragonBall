import CharacterInfo from './pages/CharacterInfo';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <div>
      
      <header className='flex justify-center'>
        
      <Link to="/" className="font-bold text-3xl p-5 text-yellow-400">
        Dragon Ball API
      </Link>
      
      </header>
      <Routes>
                <Route path="/" element = {<Home/>} /> 
                <Route path="/:id" element = {<CharacterInfo/>} /> 

      </Routes>
      
    </div>
  );
}

export default App;
