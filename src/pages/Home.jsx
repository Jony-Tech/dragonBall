import { useState, useEffect } from 'react';
import Character from '../components/Character';
import SearchBar from '../components/SearchBar';

export default function Home() {
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
        <SearchBar
      setCharacters = {setCharacters}
            fetchData = {fetchData}
      ></SearchBar>

      <main className='flex justify-center'>
        <div
            className="sm:w-3/4 mt-5 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-5 text-center m-4"
        >
            {characters.map(character => (
            <Character
                key={character.id}
                character={character}
            />
            ))}
        </div>
      </main>

    </div>
  );
}
