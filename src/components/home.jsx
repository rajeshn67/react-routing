import React from 'react'
import { useNavigate } from 'react-router-dom';




const Home = () => {
    const navigate = useNavigate();
    function hadleClick(){
      navigate('/about');
     }
  return (
    <div>
      
         <button onClick={hadleClick}>Home button move</button>  
    </div>
  )
}

export default Home