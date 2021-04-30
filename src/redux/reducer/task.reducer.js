import { TaskType } from '../task/task.actiontype';

const defaultState = {
    createTask : {

    },
    payload : false
}

const taskReducer = (state = defaultState,action) => {
    switch (action.type) {
        case TaskType.CREATE_TASK:
            return {
                ...state,
                createTask : {...action.createTask}
            }  
        case TaskType.TASK_CREATED:
            return {
                ...state,
                payload : action.payload
            }  
        default:
            return {
                ...state
            }
    }
}

export default taskReducer;