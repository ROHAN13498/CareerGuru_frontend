import React from 'react'
function Jobbox2(){
    return(
        <div classNameName ="col-md-9 ms-2 ">
                <div className="row p-3 m-4  job1  mb-3 border border-dark p-2 mb-2 border-3 rounded" >
            <div className="row ">
                <div className="col-md-2"><img src="https://i.ytimg.com/vi/hBAuIzZttP4/hqdefault.jpg"
                        className="rounded-circle" style={{width:"100%"}}></img>
                </div>
                <div className="company_name col">
                    <div className="d-flex flex-row">
                        <h3>Axes Development</h3>
                        <i className="fa-regular fa-bookmark btn" style={{marginLeft:"auto"}}></i>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-row">
                            <div className=" me-2 m-3">
                                <i className="fa-solid fa-briefcase jobdescription"></i>Senior Manager
                            </div>
                            <div className=" me-3 m-3">
                                <i className="fa-solid fa-location-dot  location"></i>Indore
                            </div>
                            <div className=" me-3 m-3">
                                <i className="fa-solid fa-users"></i>6yr Experience
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
    )
}
export default Jobbox2