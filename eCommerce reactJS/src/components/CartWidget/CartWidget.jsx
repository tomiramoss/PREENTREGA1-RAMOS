import logo from "../../assets/carrito.png"
import './CartWidget.css'

function CartWidget() {
  return (
    <a className="nav-link" href="#">
    <img src={logo} />
    <span>5</span>
    </a>
  )
}

export default CartWidget