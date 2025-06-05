import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


//FC = Function Component (Foksiyonel Component)
const Header: React.FC = () => {
    return(
        <header className='header'>
           <Link to="/">
            <a className='header-title'>🍲 TastyBook</a>
           </Link>
           <nav>
                <Link to="/" className='nav-link'>Tarifler</Link>
                <Link to="/add" className='nav-link'>Tarif Ekle</Link>
           </nav>
        </header>
    )
}
export default Header;
