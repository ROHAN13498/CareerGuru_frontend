import React from 'react'
function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg bg-primary ">
   <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color: "white"}}>Career Guru</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" style={{color: "white"}} aria-current="page" href="home.html">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" style={{color: "white"}} aria-current="page" href="job recomendations.html">Job Recomendations</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" style={{color: "white"}} href="savedjobs.html">Saved Jobs</a>
            </li>
         <li className="nav-item">
            <a className="nav-link" style={{color:" white"}} href="#">Applied Jobs</a>
         </li>
        </ul> 
         <ul style={{marginLeft: "auto"}}>
            <li className="nav-item dropdown " >
               <a style={{color: "white"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i className="fa-sharp fa-solid fa-user"></i>
               </a>
               <ul className="dropdown-menu dropdown-menu-dark " style={{backgroundColor: "white"}}>
                  <li><a className="dropdown-item" href="#" style={{color: "blue"}}>Update Profile</a></li>
                  <li><a className="dropdown-item" href="#" style={{color: "blue"}}>Logout</a></li>
               </ul>
            </li>
            </ul>
      </div>
   </div>
</nav>
    )
}
export default Navigation