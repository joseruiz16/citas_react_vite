import {useState,useEffect} from 'react'
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import ListadoPacientes from "./componentes/ListadoPacientes";


function App() {

  //Creo un arreglo para guardar lo del formulario por eso lo paso al formulario y despues lo envio a listadoPacientes
  const [pacientes,setPacientes]= useState([]);
  //objeto con la informacion del paciente a editar. LO Creo como objeto porque el arreglo por cada paciente genera un arreglo
  const [paciente,setPaciente]= useState({});


  useEffect(() => {
    const obtenerLocalStorage =()=>{
     
      //HAGO ESTO porque los useEffect se ejecutan en orden y como aca  traigo los datos pero todavia no existe el arreglo 
      //pacientes lo añado 

      //Lo que consigo del localStorage lo convierto de string a arreglo y si esta vacio el localStorage agregue un arreglo vacio
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      //actualizo el estado con lo que tengo
      setPacientes(pacientesLS)
    }

    //ejecuto la funcion 

    obtenerLocalStorage()
    
  }, [])
  
 
  useEffect(() => {
    //'pacientes' es el nombre que le doy en el storage  y con JSON.s convierto a string el arreglo de pacientes
    localStorage.setItem("pacientes",JSON.stringify(pacientes));
  }, [pacientes])
  



  const eliminarPaciente = (id)=>{
    //hago un filtro y que el id sea diferente al que recibe ya que filter crea un arreglo nuevo y actualizo estado
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    
    //Actualizo el array de pacientes
    setPacientes(pacientesActualizados);
  }

  return (
    //mx-auto para centrar horizontalmente un elemento dentro de su contenedor padre.
    <div className="container mx-auto mt-5 ">
      <Header />
      <div className="mt-12 md:flex ml-10">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  );
}

export default App;
