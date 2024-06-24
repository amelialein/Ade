import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../resources/logo.png'

function Header (){
    return(
        <header className="App-header">
        <Link to='/home'><img src={logo} className="App-logo" alt="logo" /></Link>

        {/* navigaton bar */}
            <nav className="navlist" style={{display:"inline-block",width:"550px",alignSelf:"flex-end"}}>
                <ul style={{display: "inline-flex"}}>
                    <li style={{listStyle:"none",display:"inline",padding:"0 20px"}}>
                    <Link to='/fixtures'><a className="navButtonFix" style={{color:"white",textDecoration:"none"}}>Fixture</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/stats'><a className="navButtonStats" style={{color:"white",textDecoration:"none"}}>Stats</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/interviews'><a className="navButtonInt" style={{color:"white",textDecoration:"none"}}>Interviews</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/join'><a className="navButtonJoin" style={{color:"white",textDecoration:"none"}}>Join us</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/contact'><a className="navButtonContact" style={{color:"white",textDecoration:"none"}}>Contact</a></Link></li>
                </ul>
            </nav>
        
      </header>
    )
}

export default Header;