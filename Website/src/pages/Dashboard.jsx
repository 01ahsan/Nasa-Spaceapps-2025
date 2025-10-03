import { useEffect, useState } from "react";
import axios from "axios";
import PlanetChart from "../components/PlanetChart";
import PlanetTable from "../components/PlanetTable";
import SearchBox from "../components/SearchBox";

export default function Dashboard() {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios.get("https://full5.onrender.com/top_candidates?n=100")

      .then(res => setPlanets(res.data))
      .catch(err => console.error(err));
  }, []);

  // useEffect(() => {
  // axios.get("http://127.0.0.1:8000/top_candidates") // no ?n=20
  //   .then(res => setPlanets(res.data))
  //   .catch(err => console.error(err));
  // }, []);

  const filtered = planets.filter(p => 
    p.pl_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">🔭 Exoplanet Detectability Dashboard</h1>
      <SearchBox search={search} setSearch={setSearch} />
      <div className="my-6">
        <PlanetChart data={filtered} />
      </div>
      <PlanetTable data={filtered} />
    </div>
  );
}
