User {
  username: string, null: false, unique: true
  session_token: string
  password_digest: string, null: false
}

List{
  user_id: integer, null: false
  title: string, null: false
  due: string, null: false, default: "never"
  completed: boolean, default: false
  num_tasks: integer, default: 0
  num_completed: integer, default: 0
}

Task {
  list_id: integer
  title: string, null: false
  description: string
  due: string, null: false, default: "never"
}
