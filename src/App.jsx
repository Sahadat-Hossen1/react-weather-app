import { useEffect, useState } from "react";
import searchImg from "./assets/images/search.png";
import Imgclear from "./assets/images/clear.png";
import Imgclouds from "./assets/images/clouds.png";
import Imgdrizzle from "./assets/images/drizzle.png";
import Imghumidity from "./assets/images/humidity.png";
import Imgmist from "./assets/images/mist.png";
import Imgrain from "./assets/images/rain.png";
import Imgsnow from "./assets/images/snow.png";
import Imgwind from "./assets/images/wind.png";
function App() {
  const [data, setData] = useState([]);
  const handle_submite = async (e) => {
    e.preventDefault();
    const cityName = e.target.cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5f7869afe988211f4cc7c24f9b69eb95&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data))
    //   .catch((err) => console.log(err));
  };

  console.log(data);
  // console.log(data.main.temp);
  return (
    <div className="flex justify-center py-12 ">
      {/* <!-- main div --> */}
      <div className="bg-linear-to-r from-cyan-400 to-blue-500 w-96 px-4 pb-8 rounded-2xl">
        {/* <!-- for the search  input fild --> */}
        <form onSubmit={handle_submite}>
          <div className="w-88 flex justify-between border rounded-2xl my-8  ">
            <input
              id="inpute"
              type="text"
              spellcheck="true"
              autoComplete={false}
              name="cityName"
              className="w-4/5 border-none bg-cyan-400 focus:border-none focus:outline-none focus:bg-cyan-400 rounded-2xl text-center"
            />

            <button
              className="flex justify-center cursor-pointer w-1/5"
              id="inputeButton"
              type="submit"
            >
              <img src={searchImg} alt="" className="scale-75 " />
            </button>
          </div>
        </form>
        {data ? (
          // for showing data
          <div >
            {/* for temp  */}
            <div className="text-center py-6">
              <img className="py-2" src="" alt="" />
              <h1 className="py-2">City Name:{data.name} </h1>
              <h1>Temparacare{data?.main?.temp} °C</h1>
            </div>
            {/* for humi and wind  */}
            <div className="flex justify-between">
              {/* for humi */}

              <div className="flex justify-between items-center ">
                <img
                  src={Imghumidity}
                  alt=""
                  className="w-12 px-2"
                />
                <h1>Humidity:{data?.main?.humidity} %</h1>
              </div>
              {/* for wind */}
              <div className="flex justify-between items-center ">
                <img src={Imgwind} alt="" className="w-12 px-2"/>
                <h1>Wind speed:{data?.wind?.speed} m/s</h1>
              </div>
            </div>
          </div>
        ) : (
          "Data is loading ......"
        )}
      </div>
    </div>
  );
}

export default App;


