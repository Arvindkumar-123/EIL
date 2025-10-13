import React from "react";
// import {useNavigate} from "react-router-dom";

function About() {
    //  const router = useNavigate();


//    const isAuthenticated = () => {
       
//          if(localStorage.getItem("token")){
//            return router("/ssc")
//         } else {
//             return router("/login")
//          }
//      }
    return(

   

         <div className="container mt-5 "  >
            <div className="row text-center quiz">
                <div className="col-lg-3-p-3-me-3 col-md-6 col-sm-12 border   mt-2 " style={{background:"white",height:"115px"}} >
                    <div style={{display:"flex"}}>
                    <img src="media/images/sss.2.webp"  style={{height:"115px",width:"50%",borderRadius:"5px"}} ></img>
                    <div className="text-center">
                        <h2 className="text-center">SSC</h2>
                        <p className="text-center">Mock Test FREE <br/><button className="btn  btn-outline-primary" >Click</button></p>
                        
                    </div>
                    </div>
                    
                    
                    
                    
                </div>

                <div className="col-lg-3-p-5-me-5 col-md-6 col-sm-12 border   mt-2" style={{background:"white",height:"115px"}}>
                    <div style={{display:"flex"}}>
                     <img src="media/images/DELHI-POLICE.jpg" style={{height:"115px",width:"50%",borderRadius:"5px"}}></img>
                     <div className="text-center">
                        <h1>POLICE</h1>
                        <p >Mock Test FREE <br/> <button className="btn  btn-outline-primary">Click</button></p>
                     </div>
                    </div>
                </div>
                
                <div className="col-lg-3-p-5 col-md-6 col-sm-12 border  mt-2 " style={{background:"white",height:"115px"}}>
                    <div style={{display:"flex"}}>
                     <img src="media/images/rail.webp" style={{borderRadius:"5px",height:"115px",width:"50%"}}></img>
                     <div className="text-center">
                    <h1>RAILWAY</h1>
                    <p>Mock Test FREE <br/><button className="btn  btn-outline-primary">Click</button></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 border  mt-2"style={{background:"white",height:"115px"}} >
                    <div style={{display:"flex"}}>
                    <img src="media/images/pet.jpg" style={{borderRadius:"5px",height:"115px",width:"50%"}}></img>
                    
                    <div className="text-center">
                    <h1 className="text-center">PET</h1>
                    <p>MOCK TEXT FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 border  mt-2" style={{background:"white",height:"115px"}}>
                    <div style={{display:"flex"}}>
                    <img src="media/images/sssc.png" style={{borderRadius:"5px",height:"115px",width:"50%"}}></img>
                    
                   <div className="text-center">
                    <h1 className="text-center">SSSC</h1>
                    <p className="text-center">Mock Text FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                </div>
                </div>
                
                
                <div className="col-lg-3 col-md-6 col-sm-12 border   mt-2" style={{background:"white",height:"115px"}} >
                    <div style={{display:"flex"}}>
                    <img src="media/images/extrance.jpg" style={{borderRadius:"5px",height:"115px",width:"50%"}}></img>
                    <div className="text-center">
                    <h1 className="text-center">EXTRANCE</h1>
                    <p className="text-center">MOCK TEXT FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 border  mt-2 " style={{background:"white",height:'115px'}}>
                    <div style={{display:"flex"}}>
                    <img src="media/images/navy.1.jpg" style={{borderRadius:"5px",height:"115px",width:"50%"}}></img>
                    <div className="text-center">
                    <h1 className="text-center">NAVY</h1>
                    <p className="text-center">MOCK TEXT FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                   
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 border   mt-2" style={{background:"white",height:'115px'}}>
                    <div style={{display:"flex"}}>
                     <img src="media/images/army.webp" style={{borderRadius:"5px",height:"115px",width:"50%"}}></img>
                     <div className="text-center">
                    <h1 className="text-center">ARMY</h1>
                    <p className="text-center">Mock Text FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-12 border mt-2 " style={{background:"white",height:"115px"}}>
                    <div style={{display:"flex"}}>
                    <img src="media/images/airforce.jpg" style={{borderRadius:"5px",height:"115px",width:"50%"}}></img>
                    <div className="text-center">
                    <h2 className="text-center">AIR-FORCE</h2>
                    <p className="text-center">Mock Text FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                    </div>
                </div> 

            </div>



        </div>
    );
} 

 export default About;