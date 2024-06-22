import React from 'react'

function Header (){
    return(
        <header className="App-header">
        <img src="../resources/logo.png" className="App-logo" alt="logo" />

        {/* navigaton bar */}
            <nav className="navlist" style={{display:"inline-block",width:"550px",alignSelf:"flex-end"}}>
                <ul style={{display: "inline-flex"}}>
                    <li style={{listStyle:"none",display:"inline",padding:"0 20px"}}>
                      <a className="navButtonFix">Fixture</a></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                      <a className="navButtonStats">Stats</a></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                      <a className="navButtonInt">Interviews</a></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                      <a className="navButtonJoin">Join us</a></li>
                    <li style={{listStyle:"none",display:"inline",padding: "0 20px"}}>
                      <a className="navButtonContact">Contact</a></li>
                </ul>
            </nav>
        
      </header>
    )
}

export default Header;