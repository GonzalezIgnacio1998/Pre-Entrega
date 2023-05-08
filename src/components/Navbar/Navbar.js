import CartWidget from "../CartWidget/Cartwidget";

const Navbar =() => {
  return (
    <nav>
      <h3>Barra de navegacion</h3>
      <div>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Contacto</button>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default Navbar;
