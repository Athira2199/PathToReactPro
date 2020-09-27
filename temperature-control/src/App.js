import React,{useState} from 'react'

const App = () =>{

  const [temperatureValue, setTemperatureValue] = useState(10)  // state variable for temperature value
  const [temperatureColor, setTemperatureColor] = useState("cold") //state variable for temperature color

  const increaseTemperature = ()=>{
    if(newTemperature == 30) return;   //return if temperature = 30 termination condition
    const newTemperature = temperatureValue + 1
    if(newTemperature >= 15){
      setTemperatureColor('hot')
    }
    setTemperatureValue(newTemperature)
  }

  const decreaseTemperature = ()=>{
    if(newTemperature == 0) return; // return if temperature = 0 termination condition
    const newTemperature = temperatureValue - 1
    if(newTemperature < 15){
      setTemperatureColor('cold')
    }
    setTemperatureValue(newTemperature)
  }

  return(
  <div className="app-container">
    <div className="temperature-display-container">
  <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
    </div>
    <div className="button-container">
      <button onClick={()=>increaseTemperature()}>+</button>
      <button onClick={()=>decreaseTemperature()}>-</button>
    </div>
  </div>
  )
}

export default App