import React from 'react';
import PropTypes from 'prop-types';

// Make the component work with both old and new prop formats
function Task({ task, text, category, onDelete }) {
  // Support both prop formats
  const taskData = task || { text, category, id: Date.now() };

  return (
    <div className="task" data-testid="task">
      <div className="label">{taskData.category}</div>
      <div className="text">{taskData.text}</div>
      <button 
        className="delete" 
        onClick={() => onDelete(taskData.id)}
        data-testid="delete-button"
      >
        X
      </button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
    category: PropTypes.string
  }),
  text: PropTypes.string,
  category: PropTypes.string,
  onDelete: PropTypes.func
};

Task.defaultProps = {
  task: null,
  text: '',
  category: '',
  onDelete: () => {}
};

export default Task;