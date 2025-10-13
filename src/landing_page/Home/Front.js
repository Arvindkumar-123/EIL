

import React from 'react';

function Front() {
 
const getUserName = () => {
  return localStorage.getItem("name") || "";
};

   
 return (
     <div className="container">
        <div className="row mt-5">
            <div style={{display:'flex',alignItems:'auto'}}>
            <div className="col-lg-3 col-md-6 col-sm-5 ">
               

                <h1 >WELCOME TO Hi <span style={{color:"#4169E1"}}>E</span ><span style={{color:'#DC143C'}}>I</span><span style={{color:"#50C878"}}>L</span> PLATFORM <span style={{color: ' #007bff'}}>{getUserName()}</span> </h1>
                <p className="mt-5">Crack your goal our platform</p>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-4">
                <img src="media/images/learing.1.webp" style={{width:"100%"}}></img>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-12 text-center" style={{background:'black',position:"relative",bottom:"40px",height:"40px"}}>
                <i >Education Is Life पर सीखना सिर्फ एक प्रक्रिया नहीं, एक क्रांति है—जहाँ हर छात्र अपने लक्ष्य को न सिर्फ समझता है, बल्कि उसे हासिल करने की ताकत भी पाता है!
                </i>
            </div> */}
</div>
        </div>
     </div>
    );
}

export default Front;