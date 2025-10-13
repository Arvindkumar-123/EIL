import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';


function Navbar(){
    
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    
    navigate("/login"); // redirect to login page
  };

     return(
<nav className="navbar navbar-expand-lg-sm-md bg-body-tertiary" >
   
  <div className="container" >
            <h2>
            <span style={{ color: "#4169E1" }}>E</span>
            <span style={{ color: "#DC143C" }}>I</span>
            <span style={{ color: "#50C878" }}>L</span>
            </h2>

    
      <div class="navicon"  >
        <Link className="nav-link active me-4" aria-current="page" to='/' >Home</Link>
        <Link className="nav-link me-2"to='/login' >Login</Link>
        <Link className="nav-link" onClick={handleLogout}
          
          >Logout</Link>
       
     
    </div>
  </div>
</nav>
     )
    }

    export default (Navbar);

