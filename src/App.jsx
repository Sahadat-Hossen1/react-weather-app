import { useEffect, useState } from 'react'


function App() {
const [data,setData]=useState([]);
console.log(data);


useEffect(()=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=manikganj&appid=5f7869afe988211f4cc7c24f9b69eb95&units=metric
`).then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))
},[])
  return (
  <div  className="flex justify-center py-12 ">
      {/* <!-- main div --> */}
    <div
      className="bg-linear-to-r from-cyan-400 to-blue-500 w-96 px-4 pb-8 rounded-2xl"
    >
      {/* <!-- for the search  input fild --> */}
      <div className="w-80 flex border rounded-2xl mt-8">
        <input
          id="inpute"
          type="text"
          spellcheck="true"
          className="w-68 border-r border-black focus:outline-none"
        />

        <button
          className="flex justify-center cursor-pointer"
          id="inputeButton"
          type="submit"
        >
          <img src="./images/search.png" alt="" className="w-full h-10" />
        </button>
      </div>
      <div id="data">
        {/* <!-- this  for temparacer --> */}
        <div className="text-center py-6">
          <img src="./images/clear.png" alt="" id="tempImg" className="w-40 h-40 rounded-full ml-20 " />
                      <h1 id="city">shibala</h1>

          <h1 id="temp">temparacer 27 deg celsiaas</h1>
        </div>
        <div className="flex justify-between gap-8">
          {/* <!-- for himudity --> */}
          <div className="flex justify-between items-center w-1/2 gap-2">
            <img
              src="./images/humidity.png"
              alt=""
              id="windImg"
              className="w-1/4"
            />
            <h1 id="wind w-1/2 flex  ">himudity 80%</h1>
          </div>
          {/* <!-- for wind speed --> */}
          <div className="flex justify-between items-center w-1/2 gap-2">
            <img src="./images/wind.png" alt="" id="windImg" className="w-1/4" />
            <h1 id="wind w-1/2 flex  ">wind 50 km/h</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default App
