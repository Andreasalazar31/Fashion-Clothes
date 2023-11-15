
  const Card = (data) => {
 
  
    return (
  <div className=" bg-white cursor-pointer w- h-70 rounded-Ig pt-11">
    <figure className="relative mb-9 w-full h-4/5">
      <span className="absolute bottom-0 left-0 bg-white/70 rounded-Ig text-black text-xs m-2 px-3 py-0.5">
        { data.data.name}
      </span>
         <img
         className="w-full h-full object-cover rounded-lg"
         src= { data.data.photo}
         alt=""
         srcSet=""
         />
        
         </figure>
         <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.name}</span>
        <span className="text-lg font-medium">${data.data.birthdate}</span>
        

         </p>
         </div>
    );
  };
  export default Card;