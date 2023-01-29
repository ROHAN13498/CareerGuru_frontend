
import Navigation1 from "./Navigation1"
export const Home = () => {
    return (
        <div>
            <Navigation1/>
            <div className="d-sm-flex align-items-center justify-items-between">
  <div>
    <h1 className="p-5">Let us help you find your next big opportunity.</h1>
    <div className="d-grid gap-3 col-4 mx-auto    ">
      <button  className="btn btn-primary" type="button ">Sign Up</button>
      <button  className="btn btn-primary" type="button">Login</button>
    </div>
  </div>
  <img
    className="img-fluid w-50 d-none d-md-block"
    src="1.png"
    alt="showcaseimage"
  />
</div>


<div className="row row-cols-1 row-cols-md-3 g-4">
  <div style={{borderStyle: "solid",borderWidth: "2px"}} className="col text-center">
    <div  className="card h-100 border-0">
      <h4>Step1:</h4>
      <div className="container d-flex justify-content-center align-items-center">

        <img style={{maxWidth: "50%" ,display:"block"}} src="car-1.png" className="card-img-top " alt="..."></img>
    </div>
      <div className="card-body">
        <h5 className="card-title">Register</h5>
    </div>
  </div>
  </div>
  <div style={{borderStyle: "solid",borderWidth: "2px"}} className="col text-center ">
    <div className="card h-100 border-0">
      <h4>Step 2:</h4>
      <div className="container d-flex justify-content-center align-items-center">

        <img style={{maxWidth: "50%",display:"block"}} src="profile.png" className="card-img-top" alt="..."></img>

    </div>

      <div className="card-body">
        <h5 className="card-title">Make A Profile</h5>            </div>
    </div>
  </div>
  <div style={{borderStyle: "solid",borderWidth: "2px"}}>
  <div   className="col text-center">
      <h4>Step 3:</h4>
      <div className="card h-100 border-0">
        <div className="container d-flex justify-content-center align-items-center">
          <img style={{maxWidth: "50%" ,display:"block"}} src="apply (1).png" className="card-img-top " alt="..."></img>
      </div>
        <div className="card-body">
          <h5 className="card-title">Apply For Jobs</h5>
      </div>
    </div>
  </div>
  </div>
    
  
</div>
        </div>
        

    )
}