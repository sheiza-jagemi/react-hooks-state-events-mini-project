import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TaskList({ tasks = [], onDeleteTask = () => {} }) {
  return (
    <div className="tasks" data-testid="task-list">
      {tasks.map((task, index) => (
        <Task
          key={task.id || `task-${index}`}
          task={task}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
      category: PropTypes.string
    })
  ),
  onDeleteTask: PropTypes.func
};

export default TaskList;