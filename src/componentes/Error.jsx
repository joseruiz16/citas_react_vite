import React from "react";

//recibe props de formulario
function Error({mensaje}) {
  return (
    <div className="bg-red-700  text-white text-center p-3 rounded-xl uppercase font-bold mb-3 ">
      <p>{mensaje}</p>
    </div>
  );
}

export default Error;
