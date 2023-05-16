import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Cards from "./components/Cards";

const url = `https://course-api.com/react-tours-project`;
const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  async function getData() {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <span className="loader"></span>;
  }
  const handleDeleted = (id) => {
    setTours(() => {
      return tours.filter((tour) => {
        return id !== tour.id;
      });
    });
  };

  console.log(tours);
  return (
    <div>
      <Cards
        tours={tours}
        handleDeleted={handleDeleted}
        getData={getData}
      ></Cards>
    </div>
  );
};

export default App;
