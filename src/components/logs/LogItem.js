import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLogs } from "../../actions/logActions";
const LogItem = ({ log, deleteLogs }) => {
  const onDeleteLog = id => {
    deleteLogs(id);
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID# {log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a
          href="#!"
          onClick={id => onDeleteLog(log.id)}
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteLogs: id => {
      dispatch(deleteLogs(id));
    }
  };
};
export default connect(null, mapDispatchToProps)(LogItem);
