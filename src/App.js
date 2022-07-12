
import './App.css';
import { Input } from './components/Input/Input';

import {useState, useEffect} from 'react'
import axios from 'axios'

import { WeatherCard } from './components/WeatherCard/WeatherCard';

import {Button} from './components/Button/Button'

import Loader from './components/Loader/Loader'

function App() {

  const [text, updateText] = useState('')

  const [weatherData, updateWeatherData ] = useState({
    load: false,
    countryes:'',
    click: false
  })


  const apiKey = 'feb25304b650db40d0b45ff6ea7dec32'

  const getData = async () =>{

    updateWeatherData({
      ...weatherData,
       countryes:'',
       click: true,
       
       load:false
       } )

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${text.trim()}&type=like&appid=${apiKey}&lang=ru&units=metric`)

    updateWeatherData({
      ...weatherData,
       countryes:res.data.list,
       click: true,
       
       load: true
       } )
  }
    
  return (
    <div className="App">

      <header className="App-header">

        <h1>Weather app</h1>
        
      <div className="App-header_input">
        <Input updateText={updateText}></Input>

        <Button onClick={getData}>push</Button>
      </div>
        

      </header>



{ text==='' || !weatherData.click ? <h1>City's name</h1> :

weatherData.load ?

      <div className='weatherCards'>
        <WeatherCard weatherData={weatherData} countryes={weatherData.countryes}/>
      </div>
       :
       <Loader/>
}
<footer>
<h5>by Kharisov Aidar </h5>
</footer>
    </div>
  )
}

export default App;
