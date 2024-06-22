import React from 'react'
import { Link } from 'react-router-dom'

function Header (){
    return(
        <header className="App-header">
        <Link to='/home'><img src="../resources/logo.png" className="App-logo" alt="logo" /></Link>

        {/* navigaton bar */}
            <nav className="navlist" style={{display:"inline-block",width:"550px",alignSelf:"flex-end"}}>
                <ul style={{display: "inline-flex"}}>
                    <li style={{listStyle:"none",display:"inline",padding:"0 20px"}}>
                    <Link to='/fixtures'><a className="navButtonFix">Fixture</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/stats'><a className="navButtonStats">Stats</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/interviews'><a className="navButtonInt">Interviews</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/join'><a className="navButtonJoin">Join us</a></Link></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                    <Link to='/contact'><a className="navButtonContact">Contact</a></Link></li>
                </ul>
            </nav>
        
      </header>
    )
}

export default Header;