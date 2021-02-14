import {REHYDRATE} from 'redux-persist/lib/constants';

const initialState = {
  task: {},
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE: {
      if (action.payload) {
        const incoming = action.payload && action.payload.timer;
        if (incoming) {
          return {...state, ...incoming};
        }
      }
      return state;
    }

    case 'ADD_TASK':
      return {
        ...state,
        task: {...state.task, [action.payload.data.name]: action.payload.data},
      };

    case 'START_TASK': {
      const taskName = action.payload.taskName;
      return {
        ...state,
        task: {
          ...state.task,
          [taskName]: {
            ...state.task[taskName],
            isStarted: true,
            startTime: new Date(),
          },
        },
      };
    }

    case 'END_TASK': {
      const taskName = action.payload.taskName;
      return {
        ...state,
        task: {
          ...state.task,
          [taskName]: {
            ...state.task[taskName],
            isStarted: false,
          },
        },
      };
    }

    case 'DELETE_TASK': {
      const taskName = action.payload.taskName;
      const currentTasks = state.task;
      delete currentTasks[taskName];
      return {
        ...state,
        task: {...currentTasks},
      };
    }

    case 'UPDATE_TASK': {
      const taskName = action.payload.data.taskName;
      return {
        ...state,
        task: {...state.task, [taskName]: action.payload.data.task},
      };
    }

    default:
      return state;
  }
}
