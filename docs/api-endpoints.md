HTML API
  Root
    -Get "/" (Loads React App)
JSON API
  Users
    -POST "/api/users"
    -PATCH "/api/users/:id"
    -DELETE "/api/users/:id"
  Session
    -POST "/api/session"
    -DELETE "/api/session"
  Lists
    -POST "api/lists"
    -GET "api/lists"
    -DELETE "api/lists/:id"
    -PATCH "api/lists/:id"
    -GET "api/lists/:id"
  Tasks
    -POST "api/lists/:list_id/tasks"
    -GET "api/lists/:list_id/tasks"
    -DELETE "api/lists/:list_id/tasks/:id"
    -PATCH "api/lists/:list_id/tasks/:id"
    -GET "api/lists/:list_id/tasks/:id"
