import { useState, useEffect } from "react";
import Error from "./Error";


//es la misma que en el Header solo que aca lleva  arrow function pero no hay diferencia
//trae props de app.js pero hago destructuring de una
//pacientes es todos y paciente es el actual el a editar
const Formulario = ({ setPacientes, pacientes, paciente,setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    //Compruebo que el objeto paciente tenga valor
    if (Object.keys(paciente).length > 0) {
      //para cargar el formulario con los valores del campo a editar
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = (e) => {
    const random = Math.random().toString(36).substr(2); //hacer numero aleatorio y despues convertirlo a string
    const fecha = Date.now().toString(36); //hacer fecha actual y convertirlo a string
    return fecha + random;
  };

      //OBJETO DE PACIENTE
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      };
  

  //a esta funcion que esta en el formulario le puedo pasar la e que es parametro por defecto
  const handleSubmit = (e) => {
    e.preventDefault();//para que prevenga la redireccion por defecto que hace
    //console.log(e);

    //validacion del Formulario

    //genero un arreglo con los campos del formulario y verifico si alguno esta vacio
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);


    //REINICIAR EL FORMULARIO
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");

    //comprubo si paciente en id tiene valor
    if (paciente.id) {
      //Editando un registro

      //asigno al id el mismo id
      objetoPaciente.id = paciente.id
    
    //PARA EDITAR 

    //compruebo paState.id(el id de cada uno recorrido por el map) sea el mismo que paciente.id si es asi objetoPaciente(objeto actualizado)
    //que es el que tomo los valores de los input. Si no paState(objeto tal como esta)
      const pacienteActualizado = pacientes.map(paState => paState.id === paciente.id ? objetoPaciente : paState)

      //actualizo el estado de setPacientes(objeto que tiene toda la informacion) con la informacion del paciente actualizado
      setPacientes(pacienteActualizado)
      //limpio el estado del paciente que se actualizo para seguir con otro
      setPaciente({})
      //console.log(pacientes);

    } else {
      //NUEVO REGISTRO

      //aca añado el campo id y lo genero
      objetoPaciente.id = generarId();
      //paso un arreglo creo una copia de pacientes y le paso el objeto Paciente para evitar hacer que mute el arreglo toma solo la informacion ultima del paciente
      setPacientes([...pacientes, objetoPaciente]);
    }
  };

  return (
    //md mediaquery pantalla pequeña toma la mitad lg pantalla grande el ancho es 2/5
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y{" "}
        <span className="text-indigo-500 font-bold ">Administralos</span>
      </p>
      {/* shadow es para sombras */}
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-4">
          {/* block para ocupe todo el ancho disponible. coloco for(htmlFor) para que al dar click me seleccione el input tiene que ser igual al id*/}
          <label
            htmlFor="mascota"
            className="block text-gray-600 font-bold uppercase"
          >
            Nombre de la mascota
          </label>
          {/* w-full ancho de un elemento en el 100% del ancho del contenedor padre. */}
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //obtengo el valor que esta escribiendo Y lo asigno al setNombre
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="propietario"
            className="block text-gray-600 font-bold uppercase"
          >
            Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            type="email"
            className="block text-gray-600 font-bold uppercase"
          >
            Email contacto
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email contacto"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="alta"
            type="date"
            className="block text-gray-600 font-bold uppercase"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Email contacto"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sintoams"
            type="date"
            className="block text-gray-600 font-bold uppercase"
          >
            Alta
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-3xl
         hover:bg-indigo-800 cursor-pointer transition-shadow"
          //si paciente.id tiene valor
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
