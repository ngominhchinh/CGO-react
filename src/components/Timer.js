import { useEffect, useState } from "react"

export default function Timer(){
    let [countdown, setCountdown] = useState(10);

    useEffect(()=>{
        if(countdown >0){
            let timer = setTimeout(()=>{
                setCountdown(countdown-2);
            },1000)

            return () => clearTimeout(timer);
        }
        
    })
    return(
        <>
            <h1>Timer: {countdown}</h1>
        </>
    )
}