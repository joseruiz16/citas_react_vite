import {useEffect } from "react";
import Pacientes from "./Pacientes";


//recibe props de apps.jsx la informacion de los pacientes
function ListadoPacientes({ pacientes,setPaciente,eliminarPaciente }) {


  useEffect(()=>{
    if(pacientes.length > 0){
      console.log("agrego");
    }
    
  },[pacientes])

  return (
    //w-1/2 establesco el ancho del elemento 50% overflow-y-scroll para hacer scroll vertical al elemento y permite desplazarse
    //a través del contenido que se desborda verticalmente. y como tiene scroll hace que el formulario quede estatico
    //aplico md:h-screen para que tome toda la altura de la pantalla en pantalla md(media)
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* compruebo si el array tiene algo */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-5 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>
          {/* hago el map y omito el return porque le añadi () y despues del map como tiene un solo parametro omito los () */}
          {pacientes.map((paciente) => (
            <Pacientes paciente={paciente} key={paciente.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-5 text-center">
            Comienza a agregar pacientes{" "}
            <span className="text-indigo-600 font-bold ">
              Apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
