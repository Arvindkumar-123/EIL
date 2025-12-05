import React from "react";
import {useNavigate} from "react-router-dom";

function About() {
     const router = useNavigate();

//    const isAuthenticated = () => {
       
//          if(localStorage.getItem("token")){
//             router("/ssc")
//         } else {
//              router("/login")
//          }
//      }
   
    return(

   

         <div className="container mt-5 "  >
            <div className="row  quiz quizabout">
                <div className="col-lg-9 col-md-9 col-sm-12 border   mt-2 " style={{background:"white",height:"120px"}} >
                    <div style={{display:"flex"}}>
                        <img src="media/images/rail.webp" style={{height:"120px",width:"50%",borderRadius:"5px"}}></img>
                    
                    <div className='quizcontent'style={{height:'120px'}}>
                        
                        <h1 >RAILWAY</h1>
                        <p >Mock Test FREE <br/><button className="btn  btn-outline-primary" onClick={() => router('/ssc')} >Click</button></p>
                        
                    </div>
                    </div>
                    
                    
                    
                    
                </div>
                 <br/>
                <div className="col-lg-9 col-md-9 col-sm-12 border   mt-2" style={{background:"white",height:"120px"}}>
                    <div style={{display:"flex"}}>
                     <img src="media/images/DELHI-POLICE.jpg"style={{height:"120px",width:"50%",borderRadius:"5px"}} ></img>
                     <div className='quizcontent' style={{height:'120px'}}>
                        <h1>POLICE</h1>
                        <p >Mock Test FREE <br/> <button className="btn  btn-outline-primary" onClick={() => router('/police')}>Click</button></p>
                     </div>
                    </div>
                </div>
                
                <div className="col-lg-9 col-md-9 col-sm-12 border  mt-2 " style={{background:"white",height:"120px"}}>
                    <div style={{display:"flex"}}>
                     <img src="media/images/sss.2.webp" style={{height:"120px",width:"50%",borderRadius:"5px"}}  ></img>
                     <div className='quizcontent' style={{height:'120px'}}>
                    <h2 >SSC</h2>
                    <p>Mock Test FREE <br/><button className="btn  btn-outline-primary" onClick={() => router('/ssctext')}>Click</button></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-9 col-md-9 col-sm-12 border  mt-2"style={{background:"white",height:"120px"}} >
                    <div style={{display:"flex"}}>
                    <img src="media/images/pet.jpg" style={{height:"120px",width:"50%",borderRadius:"5px"}}></img>
                    
                    <div className='quizcontent' style={{height:'120px'}}>
                    <h1 >PET</h1>
                    <p>Mock Test FREE <br/><button className="btn  btn-outline-primary " onClick={() => router('/science')}>Click</button></p>
                    
                    </div>
                    </div>
                </div>

                <div className="col-lg-9 col-md-9 col-sm-12 border  mt-2" style={{background:"white",height:"120px"}}>
                    <div style={{display:"flex"}}>
                    <img src="media/images/sssc.png" style={{height:"120px",width:"50%",borderRadius:"5px"}}></img>
                    
                   <div className='quizcontent' style={{height:'120px'}}>
                    <h1 >SSSC</h1>
                    <p >Mock Text FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                </div>
                </div>
                
                
                {/* <div className="col-lg-9 col-md-6 col-sm-12 border   mt-2" style={{background:"white",height:"120px"}} >
                    <div style={{display:"flex"}}>
                    <img src="media/images/extrance.jpg" style={{borderRadius:"5px",height:"120px",width:"50%"}}></img>
                    <div className="text-center">
                    <h1 className="text-center">EXTRANCE</h1>
                    <p className="text-center">MOCK TEXT FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                    </div>
                </div> */}

                <div className="col-lg-9 col-md-9 col-sm-12 border  mt-2 " style={{background:"white",height:'120px'}}>
                    <div style={{display:"flex"}}>
                    <img src="media/images/navy.1.jpg"style={{height:"120px",width:"50%",borderRadius:"5px"}} ></img>
                    <div className='quizcontent'style={{height:'120px'}}>
                    <h1 >NAVY</h1>
                    <p >Mock Test FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                   
                    </div>
                    </div>
                </div>

                <div className="col-lg-9 col-md-9 col-sm-12 border   mt-2" style={{background:"white",height:'120px'}}>
                    <div style={{display:"flex"}}>
                     <img src="media/images/army.webp" style={{height:"120px",width:"50%",borderRadius:"5px"}}></img>
                     <div className='quizcontent'style={{height:'120px'}}>
                    <h1 >ARMY</h1>
                    <p>Mock Text FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    
                    </div>
                    </div>
                </div>
                
                <div className="col-lg-9 col-md-9  col-sm-12 border mt-2 " style={{background:"white",height:"120px"}}>
                    <div style={{display:"flex"}}>
                    <img src="media/images/airforce.jpg"style={{height:"120px",width:"50%",borderRadius:"5px"}} ></img>
                    
                        <div className='quizcontent' style={{height:'120px'}}>
                    <h2 >AIR-FORCE</h2>
                    <p >Mock Text FREE <br/><button className="btn  btn-outline-primary ">Click</button></p>
                    </div>
                    
                    </div>
                </div> 

            </div>



        </div>
    );
} 

 export default About;