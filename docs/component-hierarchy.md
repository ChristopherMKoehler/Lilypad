#AuthFormContainer
  -AuthForm

#HomeContainer
  -NavColumn
  -ListContainer
  -SearchContainer
  -NewListFormContainer
  -SearchResultsContainer

#ListIndexContainer
  -ListIndex

#ListIndex
  -ListContainer
  -NewListFormContainer

#ListContainer
  -TaskContainer
  -TaskFormContainer

#TasksContainer
  -TaskIndex

#TaskIndex
  -TaskIndexItem
  -TaskDetail
    -title
    -due
    -completed

#NewListFormContainer
  -NewListForm
    -inputs for title, due, and completed

#NewTaskFormContainer
  -NewTaskForm
    -inputs for title, due, and completed

#SearchContainer
  -SearchForm
    -single input to look for title of task or list

#SearchResultsContainer
  -SearchResultsIndex
    -shows all tasks and lists that match query

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/home" | "HomeContainer" |
  | "/home/lists/:listId" | "ListContainer" |
  | "/home/lists/:listId/tasks/" | "TasksContainer" |
  | "/home/search-results" | "SearchResultsContainer"|
  | "/new-list" | "NewListFormContainer" |
  | "/new-task" | "NewTaskFormContainer" |
