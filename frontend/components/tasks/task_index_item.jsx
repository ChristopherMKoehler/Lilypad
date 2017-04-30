import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

const TaskIndexItem = (props) => {
  const toggleCompleted = (e) => {
    e.stopPropagation();
    let updatedTask = merge({}, props.task);
    updatedTask.completed = !updatedTask.completed;
    props.updateTask(updatedTask);
  };

  const redirectToShow = (e) => {
    if(e.target.type !== "checkbox"){
      if(props.router.location.pathname.indexOf("search") >= 0){
        props.router.push(`home/search/tasks/${props.task.id}`);
      } else {
        props.router.push(`home/lists/${props.params.id}/tasks/${props.task.id}`);
      }
    }
  };

  return (
    <li onClick={ redirectToShow }>
      <input type="checkbox"
        checked={ props.task.completed }
        className='task-checkbox'
        onChange={ toggleCompleted }/>
      { props.task.title }
    </li>
  );
};

export default withRouter(TaskIndexItem);
