import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

export default function SearchBar({setCharacters, fetchData}){
    const [name, setName] = useState("");

    const getCharacter = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters?name=${name}`);
        
        const result = await response.json();
        console.log(result);
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
        
        <nav className="flex justify-center">
            <form onSubmit={searchCharacter} className="flex justify-center sm:w-3/4 gap-3  text-gray-800">
            <input
                value={name}
                onChange={e => setName(e.target.value)}
              type="text"
              className="focus:ring-2 bg-slate-800 focus:bg-slate-900 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-300 placeholder-slate-400 rounded-md p-2  ring-1  shadow-sm"
              placeholder="search your character"
            />
            <button type="submit"
              className="px-2 py-1 bg-blue-700 font-medium hover:bg-blue-800 text-white rounded duration-150"
            >
              Search
            </button>
          </form>
        </nav>
      
    )
}
