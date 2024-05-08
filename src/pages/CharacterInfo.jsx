import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Transformations from "../components/Transformations";

export default function CharacterInfo() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
                const result = await response.json();
                setCharacter(result);
            } catch (error) {
                console.log('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
    
    
    const { name, image, description, ki, maxKi, race, gender, affiliation, originPlanet, transformations } = character;
    transformations == [] ? console.log("existe") : null;
    if (loading) return (<div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
    </div>);

    return (
        <div className="flex justify-center">
            <div className="w-full sm:w-3/4 px-4">
                <h2 className="text-blue-500 p-4 text-4xl font-bold">{name}</h2>
                <div className="flex sm:flex-row items-center flex-col sm:justify-evenly mb-3 gap-3">
                    <div>
                        <img className="max-h-96 " src={image} alt={name} />
                    </div>
                    <div>
                        <p><span className="font-bold">Ki: </span>{ki}</p>
                        <p className="mt-4"><span className="font-bold">Max ki: </span>{maxKi}</p>
                        <p className="mt-4"><span className="font-bold">Affiliation: </span>{affiliation}</p>
                        <p className="mt-4"><span className="font-bold">Gender: </span>{gender}</p>
                        <p className="mt-4"><span className="font-bold">Render: </span>{race}</p>
                    </div>
                    
                </div>
                
                <section className="my-20">
                    <h3 className="font-medium text-xl mb-4">Description:</h3>
                    <p className="tracking-wide indent-8 leading-7 text-slate-300">{description}</p>
                </section>

                <section className="my-20">
                    <h3 className="text-xl mb-4 font-medium">Origin Planet: {originPlanet?.name}</h3>
                    <div className=" grid grid-cols sm:grid-cols-2 gap-4">
                        
                        <div className="flex justify-center">
                            <img src={originPlanet?.image} className="max-h-56 rounded-md" alt={originPlanet?.name} />
                        </div>
                        <p className="tracking-wide indent-8 leading-7 text-slate-300">{originPlanet?.description}</p>
                    </div>
                </section>
                
                <section className="mb-20">
                    {transformations ? transformations.length !== 0 ? <h3 className="text-xl mb-4 font-medium">Transformations</h3> : null : null}
                    <div className=" mt-5 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-5 text-center m-4">
                    {transformations.map(transformation => (
                        <Transformations
                            key={transformation.id}
                            transformation = {transformation}
                        ></Transformations>
                    ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
