import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLogs } from "../../actions/logActions";
const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      console.log(message, tech, attention);

      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };
      // đẩy dữ liệu lên server thông qua props đã được dispatch
      addLogs(newLog);
      //show thông báo tạo mới log thành công
      M.toast({ html: `Log added by ${tech}` });
      // clear filde
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
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
          onClick={onSubmit}
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    addLogs: log => {
      dispatch(addLogs(log));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddLogModal);
