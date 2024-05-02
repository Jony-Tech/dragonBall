import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

export default function Nav({setCharacters, fetchData}){
    const [name, setName] = useState("");

    const getCharacter = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters?name=${name}`);
        
        const result = await response.json();
        setCharacters(result)
        if(result.length === 0){
            Swal.fire({
            title: "Opps...",
            text: "Character not found",
            icon: "error"
            });
            fetchData();
        }
        
        
      } catch (error) {
        console.error('Error fetching data:', error); 

      }
    };


    function searchCharacter(e){
        e.preventDefault()
        if(name){
            getCharacter()
        }else{
            setCharacters([])
            fetchData()
        }
        setName("")
    }

    return(
        <nav>
            <form onSubmit={searchCharacter} className="flex justify-center gap-3 text-gray-800">
            <input
                value={name}
                onChange={e => setName(e.target.value)}
              type="text"
              className="border appearance-none rounded p-1 focus:outline-none focus:border-gray-600 leading-tight"
              placeholder="search your character"
            />
            <button type="submit"
              className="px-2 py-1 bg-blue-700 font-bold hover:bg-blue-800 text-white rounded duration-150"
            >
              Search
            </button>
          </form>
        </nav>
    )
}