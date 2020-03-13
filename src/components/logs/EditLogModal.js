import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLogs } from "../../actions/logActions";
import { connect } from "react-redux";

const EditLogModal = ({ current, updateLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  useEffect(() => {
    // nếu đúng là log khi click vào sửa thì sẽ hiện lên data cũ 
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);
  const onSubmit = e => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      console.log(message, tech, attention);
      const updateLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };
      updateLogs(updateLog);
      M.toast({ html: `Update Log by ${tech} Succes !` });
      // clear filde
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <input
            type="text"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <label htmlFor="message" className="active">
            Log Message
          </label>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technicial
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={e => onSubmit(e)}
          className="modal-close waves-effect blue waves-light btn "
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%"
};
const mapStateToProps = state => {
  return {
    current: state.logRecuders.current
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    updateLogs: log => {
      dispatch(updateLogs(log));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditLogModal);
