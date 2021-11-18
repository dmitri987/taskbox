import { createStore } from 'redux';

const STATES = {
  TASK_INBOX: 'TASK_INBOX',
  TASK_PINNED: 'TASK_PINNED',
  TASK_ARCHIVED: 'TASK_ARCHIVED',
};

const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
  LOADED: 'LOADED',
};

export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

const taskStateReducer = (taskState) => (state, action) => ({
  ...state,
  tasks: state.tasks.map(t => t.id === action.id ? { ...t, state: taskState } : t),
});

export const reducer = (state, action) => {
  switch(action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer(STATES.TASK_ARCHIVED)(state, action);
    case actions.PIN_TASK:
      return taskStateReducer(STATES.TASK_PINNED)(state, action);
    case actions.LOADED:
      return { ...state, loading: false, };
    default: 
      return state;
  }
};

const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks, loading: false, });
