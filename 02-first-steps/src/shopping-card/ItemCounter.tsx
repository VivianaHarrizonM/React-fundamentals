import { useState } from "react";

import './itemCounter.css'

interface Props {
  name: string;
  quantity?: number
}
const ItemCounter = ({name, quantity = 1} : Props) => {

  const [count, setCount] = useState(quantity);

  const handleAdd  = () =>{
    setCount(count + 1);
  }
  const hadleSubstract= () =>{
    if( count == 1)return;
    
    setCount(count - 1);

  // const handleClick = () => {
  //   console.log(`Click ${name}`)
  // }
}
  return (
    <section className="item-row"
    //style={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   gap: 10,
    //   marginTop: 10,

    //}}
    >
      <span className="item-text"
      style={{
        color: count == 1 ? 'red': 'black',
        
      }}
      >
        {name}
      </span>
      <button  
        // onMouseEnter={ () => {
        //   console.log(`Mouse Enter ${name}`)
        // }}
        onClick={handleAdd }>+1</button>
      <span>{count}</span>
      <button onClick={hadleSubstract}>-1</button>
    </section>
  )
  }

export default ItemCounter;
