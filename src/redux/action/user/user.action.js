import axios from "axios";
import { UserType } from "./user.actiontype";

var config = {
    method: 'get',
    url: 'https://devza.com/tests/tasks/listusers',
    headers: {
        'AuthToken': 'M5xwaKuTReAR8L2GduzHw55yvXw6UdOQ',
    }
};

export const getAllUsers = () => async dispatch => {
    const response = await axios(config);
    const data = await response.data;
    dispatch({
        type : UserType.FETCH_USER,
        allUsers : data.users
    });
}