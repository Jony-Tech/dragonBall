import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Character from './components/Character';

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true)
  
  const fetchData = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters?page=${currentPage}&limit=10`);
        const result = await response.json();

        if (firstLoad) { 
          setCharacters(result.items);
          setFirstLoad(false); 
        } else {
          setCharacters(prevCharacters => [...prevCharacters, ...result.items]); 
        }
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };

  useEffect(() => {
    
    fetchData();
  }, [currentPage]); 

  const handleScroll = () => {
    if(document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight){
      setCurrentPage((prev) => prev +1)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <Nav
      setCharacters = {setCharacters}
            fetchData = {fetchData}
      ></Nav>
      <main
        
        className="container-lg mt-5 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 text-center m-4"
      >
        {characters.map(character => (
          <Character 
            key={character.id}
            character={character}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
