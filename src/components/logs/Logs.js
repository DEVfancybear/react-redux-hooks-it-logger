import React, {useEffect} from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import {connect} from "react-redux";
import {getLogs} from "../../actions/logActions";
import Pagination from "react-js-pagination";

const Logs = ({getLogs, logRecuders: {loading, logs, page, totalItems}}) => {
    // khai báo state kiểu react-hooks: tham số thứ nhất là state ban đầu tham số thứ 2 là setState của tham số thứ nhất,
    // khi nào cần set lại state của tham số thứ nhất thì gọi tham số thứ 2 và truyền state thay đổi vào thì sẽ state lại dc state
    // khai báo url data
    // const api = "http://localhost:3900/";
    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false);
    useEffect(() => {
        // gọi function getlogs qua bằng lifecycle của hooks
        getLogs(1);
        //eslint-disable-next-line
    }, []);
    // const getLogs = async () => {
    // setState của loading
    // setLoading(true);
    //fetch data to api
    // const res = await axios.get(api + "logs");
    // console.log(res);
    // const data = res.data;
    // console.log(data);
    // set lại state của state logs đã được khai báo (lưu data tại state logs)
    //   setLogs(data);
    //   setLoading(false);
    // };

    // kiểm tra nếu chưa load dc data sẽ hiện loading
    if (loading || logs === null) {
        return <Preloader/>;
    }
    // còn đã có data thì trả về list logs
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {!loading && logs.length === 0 ? (
                    <p className="center">No logs to show...</p>
                ) : (
                    //logs: là state để lưu data, gọi thẳng thay vì như class components là this.state.logs
                    logs.map((log, index) => <LogItem log={log} key={index}/>) //truyền props cho component LogItem
                )}
            </ul>
            <div className="pagination p1">
                <Pagination
                    disabledClass={"disabled-navigation"}
                    prevPageText={"<"}
                    nextPageText={">"}
                    hideFirstLastPages
                    activePage={page}
                    // itemsCountPerPage={this.props.data.numItemsPerPage}
                    totalItemsCount={totalItems}
                    onChange={getLogs}
                />
            </div>
        </div>
    );
};

const mapStateToprops = state => {
    return {
        logRecuders: state.logRecuders
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getLogs: (page) => {
            dispatch(getLogs(page));
        }
    };
};

export default connect(mapStateToprops, mapDispatchToProps)(Logs);
