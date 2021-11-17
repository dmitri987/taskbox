import React from 'react';
import PropTypes from 'prop-types';

export const STATES = {
  TASK_INBOX: 'TASK_INBOX',
  TASK_PINNED: 'TASK_PINNED',
  TASK_ARCHIVED: 'TASK_ARCHIVED',
};

const Task = ({ task: { id, title, state }, onArchive, onPin }) => (
  <div className={`list-item ${state}`}>
    <label className="checkbox">
      <input 
        type="checkbox"    
        defaultChecked={state === STATES.TASK_ARCHIVED}
        disabled
        name="checked"        
      />
      <span className="checkbox-custom" onClick={() => onArchive(id)} />
    </label>
    <div className="title">
      <input type="text" value={title} readOnly placeholder="Input title" />
    </div>

    <div className="actions" onClick={event => event.stopPropagation()}>
      {state !== STATES.TASK_ARCHIVED && (

        <a onClick={() => onPin(id)}>
          <span className={`icon-star`} />
        </a>
      )}
    </div>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchive: PropTypes.func,
  onPin: PropTypes.func,
}

export default Task;
