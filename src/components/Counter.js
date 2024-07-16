import { useEffect, useState } from "react"

export default function Counter(){
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    let add1 = ()=>{
        setCount1(count1 + 1);
    }
    let add2 = ()=>{
        setCount2(count2 + 2);
    }
    useEffect(()=>{

    },[count1]);
    useEffect(()=>{

    },[count2]);
    return (
        <>
            <h1>Counters</h1>
      <div>
        
        <p>Counter 1: {count1}</p>
        <button onClick={add1}>Add 1</button>
      </div>
      <div>
        
        <p>Counter 2: {count2}</p>
        <button onClick={add2}>Add 2</button>
      </div>
        </>
    )
}