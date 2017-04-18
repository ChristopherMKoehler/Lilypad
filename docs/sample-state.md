{
  session: {
      currentUser {
        id: 1,
        username: "testUser",
      }
  },

  lists{
    1: {
      id: 1,
      title: "Sample List",
      due: 2/1/2018,
      completed: false
    }
  },

  tasks{
    1: {
      id: 1,
      list_id: 1,
      title: "Test Task",
      due: 1/1/2018,
      completed: false
    }
  }
}
