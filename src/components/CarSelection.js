import { useEffect, useState } from "react";

export default function CarSelection(){
    const carList = ['Sedan', 'SUV', 'Hatchback'];
    const colorList = ['Red', 'Blue', 'Green'];

    let [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0]
    })

    const carChanged = (e) =>{
        setSelectedCar((prevState)=>({
            ...prevState,
            car: e.target.value
        }))
    }
    const colorChanged = (e) =>{
        setSelectedCar((prevState)=>({
            ...prevState,
            color: e.target.value
        }))
    }

    useEffect(()=>{

    },[selectedCar])
    return(
        <>
            <label htmlFor="car">Select a car:</label>
                <select id="car" value={selectedCar.car} onChange={carChanged}>
                    {carList.map((car) => (
                        <option key={car} value={car}>
                            {car}
                        </option>
                    ))}
                </select>

            <label htmlFor="color">Select a color:</label>
                <select id="color" value={selectedCar.color} onChange={colorChanged}>
                    {colorList.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>

      <div>
        <p>You selected a {selectedCar.car} - {selectedCar.color}</p>
      </div>
        </>
    )
}