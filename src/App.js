import { useEffect, useState } from "react";
import {useJsApiLoader, GoogleMap} from "@react-google-maps/api";
function App() {
 // const [cities, setCities] = useState([]);

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey : process.env.REACT_APP_GOOGLE_API_KEY
  })

  const center = {lat : 48.8584, lng : 2.2945}

  if(!isLoaded)return <div>Error</div>

  // useEffect(function () {
  //   async function getCities() {
  //     const res = await fetch(
  //       `http://localhost:${process.env.REACT_APP_API_PORT}/city`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     setCities(data);
  //   }
  //   getCities();
  // }, []);

  return ( <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100vw', height: "100vh"
  }}></GoogleMap>


    // <div>
    //   {cities.map((city) => (
    //     <>
    //       <p>{city.city}</p>
    //       <p>{city.country}</p>
    //     </>
    //   ))}
    // </div>
  );
}

export default App;
