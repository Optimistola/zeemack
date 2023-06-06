import { Link } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState, useRef } from 'react';
import Aside from './aside';
import Filter from './filter';
import { useContext } from 'react';
import CartContext from './context/cartContext';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [asideOpen, setAsideOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const myRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setNavOpen(false); // Close the navigation menu after a link is clicked
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav-menu">
          <span onClick={() => { setNavOpen(true) }}><IoMenu size={20} /></span>
        </div>
        <div>
          <a className="header-lg">Zee<span>mack</span></a>
        </div>
        <div className={`nav-list ${navOpen ? 'show' : ''}`}>
          <div className="cross2" onClick={() => { setNavOpen(false) }}><IoClose size={25} /></div>
          <ul className="nav-ul" ref={myRef}>
            <li onClick={() => handleNavClick(0)} className={`menu-link ${activeIndex === 0 ? 'active' : ''}`}>
              <Link to="/" className="menu-link">Home</Link>
            </li>
            <li onClick={() => handleNavClick(1)} className={`menu-link ${activeIndex === 1 ? 'active' : ''}`}>
              <Link to="/about" className="menu-link">About</Link>
            </li>
            <li onClick={() => handleNavClick(2)} className={`menu-link ${activeIndex === 2 ? 'active' : ''}`}>
              <Link to="/contact" className="menu-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="cat">
        <Link to='/pages/cart' class='cart-link'>
          <span ><AiOutlineShoppingCart size={20} /></span>
          <span className="cat-num">{cartItems.length}</span>
        </Link>
        </div>
      </nav>
      <Filter action={() => { setAsideOpen(true) }}/>
    </header>
  );
};

export default NavBar;
