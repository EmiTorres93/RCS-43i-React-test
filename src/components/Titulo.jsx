const Titulo = (props) => {
  //Aquí vamos a cargar toda la lógica
  return (
    //aqui tb puedo agregar lógica
    <section className="text-center">
      {/* aquí va todo el maquetado*/}
      <h1 className="display-4">Proyecto Contador</h1>
      <h2 className="display-6">
        {props.subtitulo}, estado:{" "}
        {props.estadoNuevo === true ? "habilitado" : "deshabilitado"}
      </h2>
      <hr></hr>
    </section>
  );
};

export default Titulo;
