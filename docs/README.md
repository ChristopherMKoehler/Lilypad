#Lilypad (working title)

#Description

Lilypad is an app that allows you to list out the tasks required to complete a
larger task refered to as a list. Just like jotting down what needs to get done
on a piece of paper, this app will help you stay organized and increase your
productivity.

#MVP Checklist
  -Tasks
  -Lists
  -List Summary (time, num taks, num completed)
  -Search

  -Bonus: Autocomplete SmartAdd of task properties
  -Bonus: Subtasks

#Timeline

Phase 1: Backend setup and Front End User Authentication (2 days)

  Objective: Functioning rails project with front-end Authentication and styling

Phase 2: Lists Model, API, and components (2 days)

  Objective: Lists can be created, read, edited and destroyed through the API. The Lists
  component will be styled.

Phase 3: Tasks Model, API, and components (2 days)

  Objective: Tasks belong to lists that can be created, read, edited and destroyed through the API. The
  tasks index will be styled.

Phase 4: Search (2 day)

  Objective: Tasks and lists are searchable. A dropdown will be provided to choose. Will update List container. Style the search bar.


Bonus Features (TBD)

Autocomplete SmartAdd of task properties
  -Carrot in task creation looks initiates a due date dropdown

  -Exclamation point in task creation initiates dropdown to select priority number

  -Pound symbol in task creation initiates dropdown for list selection
    --This can be done for multiple lists
    --The dropdown acts an Autocomplete

  -At symbol in task creation initiates dropdown for location
    --the locations in the dropdown are based on previously inputted locations

  -Asterisk in task creation initiates dropdown for task repeating
    --ex => dropdown = ["daily", "weekly", "biweekly", "monthly"]
    --The options will be saved as defaults

  -Equals sign initiates dropdown for time estimates for the task
    --Defaults will be saved, but the user can input any time increment
    --Valid inputs must be an integer followed by "min", "hour", "day", etc

  -URL can be added but must start with "http://"
Subtasks
