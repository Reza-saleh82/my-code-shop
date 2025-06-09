import { Form, NavLink } from "react-router";
import { useState } from 'react';
import './NavSite.css'
import { Button, Col, Container, Row } from "react-bootstrap";


function NavSite() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="nav">
      <Container fluid="md" className="nav-container-flex">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`boxSearch ${showMobileMenu ? 'mobile-menu-active' : ''}`}>
          <div>
            <input type="text" className="mr-sm-2"/>
          </div>
          <div>
            <Button variant="outline-secondary">search</Button>
          </div>
        </div>
        <div className={`boxLink ${showMobileMenu ? 'mobile-menu-active' : ''}`}>
          <div>
            <NavLink className="link-nav" to='/'>فروشگاه</NavLink>
          </div>
          <div>
            <NavLink className="link-nav" to='/AboutUs'>درباره ما</NavLink>
          </div>
          <div>
            <NavLink className="link-nav" to='/Login'>ورود/ثبت نام</NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavSite;