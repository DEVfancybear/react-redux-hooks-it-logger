import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechListModal = ({ getTechs, techs, loading }) => {
  // const api = "http://localhost:3900/";
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  // const getTechs = async () => {
  // setState của loading
  // setLoading(true);
  //fetch data to api
  //   const res = await axios.get(api + "techs");
  //   console.log(res);
  //   const data = res.data;
  //   console.log(data);
  //   setTechs(data);
  //   setLoading(false);
  // };

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
const mapStateToProps = state => {
  return {
    techs: state.techReducers.techs,
    loading: state.techReducers.loading
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getTechs: () => {
      dispatch(getTechs());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TechListModal);
