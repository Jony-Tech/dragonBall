
export default function Character({character}){

    const {name, image,id, ki, race, description} = character
    return (
        <div className="bg-gray-700 flex justify-items-center flex-col p-3 rounded">
                <h2 className="font-bold text-xl">{name}</h2>
            <div className="flex justify-center">
                <img className="max-h-64" src={`${image}`} alt=""/>
            </div>
        </div>
    )
}

