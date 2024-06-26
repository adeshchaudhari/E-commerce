import React, { useContext, useState, useRef} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assests/arrow.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
        menuRef.current.classslist.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>SHOPPER</p>
            </div>
            <img onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link  style={{TextDecoration:'none'}} to='/'>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{TextDecoration:'none'}} to='/mens'> Men </Link> {menu === 'mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{TextDecoration:'none'}} to='/womens'> Women </Link> {menu === 'womens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{TextDecoration:'none'}} to='/kids'> Kids </Link> {menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className="nav-cart-count">{getTotalCartItems}</div>
            </div>
        </div>
    )
}

export default Navbar