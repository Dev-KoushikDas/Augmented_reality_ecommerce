import React from 'react'
//import img from './img.png'
import './Ar.css'
const Ar = ({link,setArModal}) => {
  return (
    <>
 

   <div id='card'>
<model-viewer src={link}
              //  ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
               // poster={img}
                alt="model"
                shadow-intensity="0.4"
                camera-controls
                rotate="180"
                auto-rotate ar>

<button slot="ar-button" className="style" onClick={()=>setArModal(false)}>
      👋 Activate AR
  </button> 
    </model-viewer>
    </div>

  
 
</>
  )
}

export default Ar