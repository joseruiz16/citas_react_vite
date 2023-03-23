function Header() {
  return (
    <>
      {/* md: es para agregar media queries */}
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento Paciente{" "}
        <span className="text-indigo-500"> Veternaria</span>
      </h1>
    </>
  );
}

export default Header;
