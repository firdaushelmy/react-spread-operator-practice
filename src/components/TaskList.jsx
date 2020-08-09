import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TaskList({ text }) {
  const [isDone, setIsDone] = useState(false);

  function clickHandler() {
    setIsDone(isDone ? false : true);
  }
  return (
    <div onClick={clickHandler}>
      <li style={isDone ? { textDecoration: 'line-through' } : null}>{text}</li>
    </div>
  );
}

TaskList.propTypes = { text: PropTypes.string.isRequired };

export default TaskList;
