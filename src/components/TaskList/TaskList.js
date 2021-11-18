import React from 'react';
import PropTypes from 'prop-types';

import Task, { STATES } from '../Task/Task';

import { connect } from 'react-redux';
import { archiveTask, pinTask, } from '../../lib/store';

const LoadingRow = (
  <div className="loading-item">
    <span className="glow-checkbox" />
    <span className="glow-text">
      <span>Loading</span> <span>cool</span> <span>state</span>
    </span>
  </div>
);


export const PureTaskList = ({ loading, tasks, onPinTask, onArchiveTask, }) => {
  if (loading)
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
    
  if (tasks.length === 0)
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );

  const sortedTasks = [...tasks].sort((a, b) => (
    (a.state === STATES.TASK_PINNED && b.state !== STATES.TASK_PINNED)
    || (a.state === STATES.TASK_INBOX && b.state === STATES.TASK_ARCHIVED)
    ? -1
    : 0
  ));
  
  return (
    <ul className="list-items">
      {sortedTasks.map(task => (
        <li key={task.id}>
          <Task task={task} onArchive={onArchiveTask} onPin={onPinTask} />
        </li>  
      ))}
    </ul>
  )
}
//loading, tasks, onPinTask, onArchiveTask,
PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task),
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};

PureTaskList.defaultProps = {  
  loading: false,
  tasks: [],
}

export default connect(
  state => ({
    tasks: state.tasks,
    loading: state.loading,
  }),
  dispatch => ({
    onArchiveTask: (id) => dispatch(archiveTask(id)),
    onPinTask: (id) => dispatch(pinTask(id)),
  })
)(PureTaskList);