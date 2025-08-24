import { WeatherData } from "@/interfaces";
import { useEffect, useState } from "react";

const WeatherApi:React.FC=()=>{
const [city, setCity]= useState("Nairobi")
const [weather, setWeather] = useState<WeatherData|null>(null)
const [loading, setLoading] = useState(true)
const [error, setError]= useState<string|null>(null)

const fetchWeather =async(q:string)=>{
setLoading(true)
setError(null)

const url= `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(q)}`;
const options= {
method: 'GET',
	headers: {
		'x-rapidapi-key': 'e8626c0a74msh4e252dfa9e03cb3p143479jsnb7c47e762bcd',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
}
}

try {
    const response = await fetch(url, options)
    if(!response.ok){
        throw new Error(`An error occured, ${response.status}`)
    }
    const data = await response.json()
    console.log(data)

    setWeather(data)
        
} catch (err:any) {
    console.error("Error", err)
    setError(err.message || "something went wrong")
    setLoading(false)
}
}

useEffect(()=>{
    fetchWeather(city)
    setLoading(false)
},[])

const handleSearch = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    fetchWeather(city)
    setLoading(false)
   
};

return(
    <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-6 border border-gray-200">

    <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input 
        type="text"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder="Enter city name" className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>

        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Search</button>
    </form>

    {loading && <p>Loading Realtime weather...</p>}
    {error && <p className="text-red-600">{error}</p>}
    {weather && !loading && !error &&(
    <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
    
    <div>
        <h3 className="text-xl sm:text-2xl font-semibold">Weather in {weather?.location.name}, {weather?.location.country}</h3>
        <p className="text-gray-500 text-sm sm:text-base mt-1">Local time:  {weather?.location.localtime}</p>
    </div>
        <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} 
        className="w-20 h-20 sm:w-24 sm:h-24 mt-4 sm:mt-0"/>
        </div>
   
   <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
   <div>
        <p className="text-3xl sm:text-4xl font-bold">Temp: {weather?.current.temp_c}</p>
        <p className="text-gray-500 mt-1">Feels like: {weather?.current.feelslike_c}</p>
        <p className="text-gray-700 mt-1">{weather.current.condition.text}</p>
   </div>
   </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-gray-700 text-sm sm:text-base mt-4">
        <p>Wind speed: {weather?.current.wind_kph} kph {weather?.current.wind_dir}</p>
        <p>Uv index: {weather?.current.uv}</p>
        <p>Humidity: {weather?.current.humidity}%</p>
    </div>
</div>
    )}
</div>
)
}
export default WeatherApi;