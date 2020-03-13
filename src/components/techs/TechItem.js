import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const { firstName, lastName, id } = tech;
  const onDelete = id => {
    deleteTech(id);
    M.toast({ html: "Technician deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={() => onDelete(id)}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteTech: id => {
      dispatch(deleteTech(id));
    }
  };
};
export default connect(null, mapDispatchToProps)(TechItem);
