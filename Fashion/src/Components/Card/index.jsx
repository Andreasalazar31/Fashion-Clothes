
  const Card = (data) => {
  
        
    return (
  <div className=" bg-pink-300 cursor-pointer w-56 h-96 rounded-ig overflow-hidden shadow-ig tranition-transform transform hover:scale-105">
    <figure className="relative mb-13 w-full h-4/5">
      <span className="absolute bottom-0 left-0 bg-white/80 rounded-Ig text-black text-xs m-2 px-7 py-0.5">
        { data.data.name}
      </span>
         <img
         className="w-full h-full object-cover rounded-t-lg mt-0"
         src= { data.data.photo}
         alt=""
         srcSet=""
         />
         <div>
          <p>{data.data.color}</p>
          <p>{data.data.size}</p>
          <p>{data.data.material}</p>
          <p>{data.data.price}</p>
         </div>
        
         </figure>
         <p className="flex justify-between">
        
        <span className="text-lg font-medium ">{data.color}</span>
        <span className="text-lg font-medium ">{data.size}</span>
        <span className="text-lg font-medium ">{data.material}</span>
        <span className="text-sm font-light">${data.data.price}</span>
        
         </p>
         </div>
    );
  };
  export default Card;