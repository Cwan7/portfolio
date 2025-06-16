import { useState } from 'react';
     import { NavLink } from 'react-router-dom';
     import './Navbar.css';

     const Navbar = () => {
       const [isMenuOpen, setIsMenuOpen] = useState(false);

       const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
       };

       return (
         <nav className="navbar">
           <div className="navbar-home">
             <NavLink to="/home">Conor Wantuch</NavLink>
           </div>
           <span className="material-symbols-outlined menu-icon" onClick={toggleMenu}>
             menu
           </span>
           <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
             <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
             <li><NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink></li>
             <li><NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink></li>
           </ul>
         </nav>
       );
     };

     export default Navbar;