import Jobbox from "./Jobbox"
import Jobbox2 from "./Jobbox2"
import Navigation from "./Navigation"


export const Postlogin2 = () => {
    return(
        <div>
            <Navigation/>
            <div class="col-md-9 ms-2 ">
            <Jobbox/>
            <Jobbox2/>

            <div className="row p-3 m-4  job1  mb-3 border border-dark p-2 mb-2 border-3 rounded" >
            <div className="row ">
                <div className="col-md-2"><img className="rounded-circle"
                        src="https://img.freepik.com/premium-vector/old-vintage-anchor_225004-2213.jpg?w=2000"
                        style={{width:"100%"}}></img>
                </div>
                <div className="col">
                    <div className="d-flex flex-row m-0 p-0">
                        <h3>Aquafire Merchant Navy</h3>
                        <div className="save" style={{marginLeft:"auto"}}>
                            <button className="btn" > <i className="fa-solid fa-bookmark"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-row">
                            <div className="me-2 m-3">
                                <i className="fa-solid fa-briefcase "></i>Engine Motorist
                            </div>
                            <div className=" me-3 m-3">
                                <i className="fa-solid fa-location-dot"></i>goa
                            </div>
                            <div className="me-3 m-3">
                                <i className="fa-solid fa-users"></i>8 yr Experience
                            </div>
                            <div  style={{marginLeft:"auto"}}>
                                <button type="button"  className="btn btn-primary m-2" >Apply<i className="fa-sharp fa-solid fa-link"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>

            </div>
            
    )
}