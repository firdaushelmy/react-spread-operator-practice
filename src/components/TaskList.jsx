import React from 'react';
import PropTypes from 'prop-types';

function TaskList({ text, changeDelete, id }) {
  return (
    <div onClick={() => changeDelete(id)}>
      <li>{text}</li>
    </div>
  );
}

TaskList.propTypes = { text: PropTypes.string.isRequired };

export default TaskList;
