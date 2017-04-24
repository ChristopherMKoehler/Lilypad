export const fetchAllTasks = () => {
  return $.ajax({
    method: "GET",
    url: "api/tasks"
  });
};

export const fetchListTasks = list_id => {
  return $.ajax({
    method: "GET",
    url: "api/tasks",
    data: { list_id }
  });
};

export const fetchTask = id => {
  return $.ajax({
    method: "GET",
    url: `api/tasks/${id}`
  });
};

export const deleteTask = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/tasks/${id}`
  });
};

export const updateTask = task => {
  return $.ajax({
    method: "PATCH",
    url: `api/tasks/${task.id}`,
    data: { task }
  });
};

export const createTask = task => {
  return $.ajax({
    method: "POST",
    url: "api/tasks",
    data: { task }
  });
};
