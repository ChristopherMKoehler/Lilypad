# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
List.destroy_all
Task.destroy_all

guest = User.create!({ username: "Guest", password: "password", email: "test@example.com"})

author_id = guest.id


groceries = List.create!({ title: "Buy Groceries", due: Date.today , author_id: author_id})
list_id = groceries.id

t1 = Task.create!({ title: "Buy Milk", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
t2 = Task.create!({ title: "Buy Bread", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
t3 = Task.create!({ title: "Sign up for membership", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
t4 = Task.create!({ title: "Get cash from ATM", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
