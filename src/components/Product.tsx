export default function Products({id,name,price,description,image}: any) {
    return (
        <div className="w=64">
            <div className="bg-blue-100 p-5 rounded-xl">
                <img src={image} className="w-64 h-64" alt={name}/>                
            </div>
            <div className="mt-2">
                <h3 className="font-bold text-lg">{name}</h3>
            </div>
            <p className="text-sm mt-1 leading-4">{description}</p>
            <div className="flex mt-1">
                <div className="text-2xl font-bold grow">${price}</div>
                <div className="hidden">{id}</div>
                <button className="bg-emerald-400 text-white pt-1 px-3 rounded-xl">Add to Cart</button>
            </div>
        </div>
    );
  }