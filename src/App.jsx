import './App.css';
import  {createContext, useEffect, useRef, useState} from "react";
// import Child1 from './Components/Child1';





// export const userContext = createContext()

//EXAMPLE OF SHOW THE SUM OF NUM1 AND NUM2 WITHOUT EVEN USING SUM BUTTON USING USEFFECT
export default function Suma (){
const  [a,setA] = useState(0);
const  [b,setB] = useState(0);
const  [c,setC] = useState(0);
const  [d,setD] = useState(0);


       
const handleChange = () =>{
if(a<100){
 setA(a+20)
}
}


useEffect(()=>{

     var filler = document.getElementById("test1")
     filler.style.height = a +"%"
  
        
  
},[a])

return(
             
<div className='main'>

         <div>
             <button className='btn'
               onClick={handleChange}
              >ADD</button>
             <div className='box1' >
                    <div id='test1' className='test1' ></div>
             </div>
         </div>
         <div>
         <button className='btn'>ADD</button>
             <div className="box2" id='box2'></div>
         </div>
         <div>
              <button className='btn'>ADD</button>
              <div className="box3" id='box3'></div>
         </div>
           <div>
               <button className='btn'>ADD</button>
               <div className="box3" id='box4'></div>
           </div>
       
       
  
     
 
</div>
)


};