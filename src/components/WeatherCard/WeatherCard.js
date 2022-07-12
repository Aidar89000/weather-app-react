import classes from './WeatherCard.module.css'

const WeatherCard = props =>

    Object.keys(props.countryes).map((e,i)=>{

        const data = props.countryes[i]

       return(

        <div className={classes['weather-card']} key={i} >

            <h1>country: {data.sys.country}</h1>

            <div className={classes['weather-card__name']}>
                <h2>name: <p>{data.name}</p></h2>
                <img src={[`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`]} alt="" />
            </div>

            <div className={classes['weather-card__temp']}>
                <h2 key={i} >description: <p>{data.weather[0].description}</p> </h2>
                {Object.keys(data.main).map((e,o)=> <h2 key={o}> {e}: <p> {data.main[e]} </p> </h2> )}
            </div>
      
        </div>
       )
    })


export {WeatherCard }