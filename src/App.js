import { useEffect, useState } from "react";
function App() {
  const [cities, setCities] = useState([]);

  useEffect(function () {
    async function getCities() {
      const res = await fetch(
        `http://localhost:${process.env.REACT_APP_API_PORT}/city`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setCities(data);
    }
    getCities();
  }, []);

  return (
    <div>
      {cities.map((city) => (
        <>
          <p>{city.city}</p>
          <p>{city.country}</p>
        </>
      ))}
    </div>
  );
}

export default App;
