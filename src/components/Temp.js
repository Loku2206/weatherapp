import React, {  useState,useEffect } from 'react'
import "../App.css"
import WeatherCard from './WeatherCard'
const Temp = () => {
      const [searchValue, setSearchValue]=useState("Bhopal")
    const [tempInfo,setTempInfo]=useState({});
      const getweatherInfo= async()=>{
         try{
      let url=
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=11023f3cabe41a6adb2bd63a3f8be0e8`;
       const res= await fetch(url);
       const data= await res.json()
       const {temp,humidity,pressure}=data.main
       const {main: weathermood}=data.weather[0];
       const{name}=data;
       const{speed}=data.wind;
       const{country,sunset}=data.sys;

       const myNewWeather={
         temp,
         humidity,
         pressure,
         name,
         speed,
         country,
         sunset,
        };
        setTempInfo(myNewWeather);

      }catch (error){
  console.log(error)
         }
      }
      useEffect(()=>{
            getweatherInfo();
      },[])
 
      return (
    <>
          <div className="wrap">
                <div className="search">
               <input type="search" placeholder='search...' 
                     autoFocus
                     id='search'

                     className='searchTerm'
                           value={searchValue}
                           onChange={(e)=>setSearchValue(e.target.value)}
                     />
                    
              <button className="searchButton" type='button' onClick={getweatherInfo}>
                    search
              </button>    
            </div>
          </div>

          {/* card temp */}
       <WeatherCard tempInfo={tempInfo}/>
          
    </>
  )
}

export default Temp