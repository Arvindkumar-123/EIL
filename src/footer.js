import React from 'react';

function Footer() {
    return (  
     <div style={{backgroundColor:"#424343ff",color:"white"}}>
       <div className='container border-top mt-2' >
        <div className='row mt-5'>
            
            <div className='col-sm-12 text-center'>
                <p>Company</p>
                <a href="#" style={{textDecoration:"none"}}>About</a>
                <br/>
                <a href="#" style={{textDecoration:"none"}}>Products</a>
                 <br/>
              <a href="#" style={{textDecoration:"none"}}>Careers</a>
                 <br/>
               
            </div>
            <div className='col-sm-12 text-center mt-5'>
                <p>Support</p>
                <a href="#" style={{textDecoration:"none"}}>Contact</a>
                 <br/>
                <a href="#" style={{textDecoration:"none"}} >Support </a>
                 <br/>
                <a href="#" style={{textDecoration:"none"}} > blog</a>
                 <br/>
               
            </div>
            <div className='col-sm-12 mt-5'>
                <h2 className='text-center'>
            <span style={{ color: "#4169E1" }}>E</span>
            <span style={{ color: "#DC143C" }}>I</span>
            <span style={{ color: "#50C878" }}>L</span>
            </h2>
            <div className='text-center'>
              <a href=''><i class="fa-brands fa-youtube white"></i></a>
              <a href=''><i class="fa-brands fa-facebook"></i></a>
              <a href=''><i class="fa-brands fa-square-twitter"></i></a>
              <a href=''><i class="fa-brands fa-telegram"></i></a>
              <a href=''><i class="fa-brands fa-square-linkedin"></i></a>
              </div>
                <p className='mt-3 text-center'>&copy; Copyright 2025 </p>
            </div>
           
        </div>
       </div>
       </div>
    );
}

export default Footer;