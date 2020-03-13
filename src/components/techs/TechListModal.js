import React, { useEffect, useState } from "react";
import axios from "axios";
import TechItem from "./TechItem";
const TechListModal = () => {
  const api = "http://localhost:3900/";
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
  }, []);
  const getTechs = async () => {
    // setState của loading
    setLoading(true);
    //fetch data to api
    const res = await axios.get(api + "techs");
    console.log(res);
    const data = res.data;
    console.log(data);
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
