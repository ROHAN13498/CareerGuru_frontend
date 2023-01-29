import React from 'react'
function Navigation1(){
    return(
        <nav className="navbar navbar-expand-lg bg-primary ">
        <a href="#" className="navbar-brand" style={{color: "white"}}>Career Guru</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu" aria-label="Toggle navigation" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu" data-toggle="collapse">
            <ul className="navbar-nav ms-auto text-center">
                <li>
                    <a className="nav-link" href="#" style={{color: "white"}}>Home</a>
                </li>
                <li>
                    <a className="nav-link" href="#1" style={{color: "white"}}>About Us</a>
                </li>
                <li>
                    <a className="nav-link" href="#2" style={{color: "white"}}>Contact Us</a>
                </li>
                <li>
                  <a href="home.html"><button className="btn btn-outline-primary gap-1"
                    style={{color: "white"}}>Login</button>   </a>
                </li>
                <li>
                    <a href="home.html"><button className="btn btn-outline-primary gap-1"
                      style={{color: "white"}}>Sign Up</button>   </a>
                </li>
                
            </ul>
        </div>
    </nav>
)

}
export default Navigation1