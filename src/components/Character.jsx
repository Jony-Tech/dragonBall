import { Link } from "react-router-dom";

export default function Character({character}){
    const {name, image,id, race, gender, affiliation} = character
    
    
    return (
        <>  
        
            
            <Link to={`/${id}`} className=" bg-slate-800 hover:bg-slate-700 hover:text-yellow-400   p-3 rounded-xl">
                <div className="flex justify-center mb-3">
                    <img className="max-h-64" src={`${image}`} alt=""/>
                </div>
                <h2 className="font-semibold">{name}</h2>
                <div className="text-start ml-3">
                    
                <p className="text-slate-300 mt-2">{affiliation}</p>
                <p className="text-slate-300 mt-2">{gender}</p>
                <p className="text-slate-300 mt-2">{race}</p>
                </div>
            </Link>
        </>
    )
}
