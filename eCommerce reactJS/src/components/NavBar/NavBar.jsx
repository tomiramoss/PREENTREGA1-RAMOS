import CartWidget from "../CartWidget/CartWidget"
import vital from "../../assets/vital.png"

function NavBar() {
  return (
    <nav>
      <div class="logo-titulo">
        <div class="logo">
            <img className="vital-logo" src={vital}/>
        </div>
        <div class="titulo">
            <h1>eCommerce</h1>
        </div>
        </div>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div class="carrito">
            <CartWidget />
        </div>
    </nav>

  )
}

export default NavBar