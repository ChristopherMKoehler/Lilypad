import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";

const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_TASK_ERRORS,
    errors
  };
};

export const fetchAllTasks = () => dispatch => (
  TaskApiUtil.fetchAllTasks()
    .then(
      (tasks) => dispatch(receiveTasks(tasks)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const fetchTasksByList = (listId) => dispatch => (
  TaskApiUtil.fetchListTasks(listId)
    .then(
      (tasks) => dispatch(receiveTasks(tasks)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const fetchTask = id => dispatch => {
  return TaskApiUtil.fetchTask(id)
  .then(
    (task) => dispatch(receiveTask(task)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteTask = id => dispatch => {
  return TaskApiUtil.deleteTask(id)
  .then(
    (task) => dispatch(removeTask(task)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};


export const updateTask = task => dispatch => {
  return TaskApiUtil.updateTask(task)
    .then(
      (task) => dispatch(receiveTask(task)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const createTask = task => dispatch => {
  return TaskApiUtil.createTask(task)
  .then(
    (task) => dispatch(receiveTask(task)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};
