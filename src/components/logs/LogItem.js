import React from "react";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { deleteLogs, setCurrentLog } from "../../actions/logActions";
const LogItem = ({ log, deleteLogs, setCurrentLog }) => {
  const onDeleteLog = id => {
    deleteLogs(id);
    M.toast({ html: "Delete Log Succes !" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          // truyền vào log là data get về (dữ liệu cũ) để bên components EditLogModal xử lí
          // khi nào đúng id thì hiện dữ liệu của data đó
          onClick={() => setCurrentLog(log)}
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
    },
    setCurrentLog: log => {
      dispatch(setCurrentLog(log));
    }
  };
};
export default connect(null, mapDispatchToProps)(LogItem);
