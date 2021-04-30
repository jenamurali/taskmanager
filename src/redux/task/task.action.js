import axios from "axios";
import moment from "moment";
import { TaskType } from "./task.actiontype"

var config = {
    method: 'post',
    url: 'https://devza.com/tests/tasks/create',
    headers: {
        'AuthToken': 'M5xwaKuTReAR8L2GduzHw55yvXw6UdOQ',
    },
    // data : data
};

export const CreateTask = (createTask = {}) => async dispatch => {
    dispatch({
        type : TaskType.TASK_CREATED,
        payload : false
    })
    const data = new FormData();
    data.append('message', createTask.message);
    data.append('due_date', moment(createTask.dueDate, "DD-MMM-YYYY HH:mm").format("YYYY-MM-DD HH:mm:ss"));
    data.append('priority', createTask.message);
    data.append('assigned_to', createTask.priority === null ? "" : createTask.priority);
    config["data"] = data;

    axios(config)
        .then(function (response) {
            dispatch({
                type : TaskType.TASK_CREATED,
                payload : true
            })
        })
        .catch(function (error) {

        });
};







// {
//     type : TaskType.CREATE_TASK,
//     createTask : {...createTask}
// }