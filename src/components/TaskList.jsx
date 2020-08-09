import React from 'react';
import PropTypes from 'prop-types';

function TaskList({ text }) {
  return (
    <>
      <li>{text}</li>
    </>
  );
}

TaskList.propTypes = { text: PropTypes.string.isRequired };

export default TaskList;
