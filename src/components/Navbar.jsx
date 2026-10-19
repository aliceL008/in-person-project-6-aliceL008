// State needed: whether the mobile menu is open (a boolean).
import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.getElementById(targetId.slice(1));

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  return (
    <nav id="navbar">
        <div className="nav-brand">
            <span>Alex Johnson</span>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a></li>
        </ul>
        {/* <!-- Mobile menu toggle (for bonus implementation) --> */}
        <div className="nav-toggle" onClick={handleMobileMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  );
}

export default Navbar;
