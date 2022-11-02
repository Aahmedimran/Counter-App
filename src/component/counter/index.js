import React from "react";
import { useState } from "react";
import './index.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Counter = () => {
  const [count, setcount] = useState(0);
 const increment = () => {
    setcount(count + 1);
  };

  
  const  decrement = () => {
        if(count>0){
            setcount(count - 1);  
      };
}
const  reset = () => {
    if(count>0){
        setcount(count - count);  
  };

}

  return (
    <div>
     
      <h1>{count}</h1>
      <br/>
      <button className="btn1" onClick={increment}><AddIcon/></button>
      <button className="btn2" onClick={decrement}>< RemoveIcon/></button>
      <br/>
      <button className="btn3" onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
