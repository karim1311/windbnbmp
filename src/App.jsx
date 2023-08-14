{
  /*  archivo App.jsx dentro de carpeta src */
}
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/cards/Cards";
import Title from "./components/title/Title";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ location: "", guests: 0 });

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <Nav onSearch={handleSearch} />
      <Title data={data} />
      <div className="container">
        <div className="row">
          {data
            .filter((card) => {
              return (
                !filters.location ||
                card.city.toLowerCase() === filters.location.toLowerCase()
              );
            })
            .map((el, i) => (
              <div className="col-md-4" key={i}>
                <Cards
                  ciudad={el.city}
                  foto={el.photo}
                  superhost={el.superHost}
                  tipo={el.type}
                  camas={el.beds}
                  calificacion={el.rating}
                  titulo={el.title}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
