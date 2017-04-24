import React from 'react';

const TaskIndexItem = (props) => {
  return (
    <li>
      { props.task.title }
    </li>
  );
};

export default TaskIndexItem;
