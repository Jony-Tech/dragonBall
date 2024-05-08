export default function Transformations({transformation}){

    const { name, ki, image} = transformation

    return(
        <>
        <div className=" bg-slate-800 hover:bg-slate-700 hover:text-yellow-400   p-3 rounded-xl">
                <div className="flex justify-center mb-3">
                    <img className="max-h-64" src={`${image}`} alt=""/>
                </div>
                <h2 className="font-semibold">{name}</h2>
                <div className="text-start ml-3">
                    
                <p className="text-slate-300 mt-2">{ki}</p>
                </div>
            </div>
        </>
    )
}