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

guest = User.new({ username: "Guest", password: "password", email: "test@example.com"})
guest.save!

author_id = guest.id


groceries = List.create!({ title: "Buy Groceries", due: Date.new , author_id: author_id})
groceries.save!
list_id = groceries.id

t1 = Task.create!({ title: "Buy Milk", due: Date.new, completed: false, list_id: list_id, author_id: author_id})
t2 = Task.create!({ title: "Buy Bread", due: Date.new, completed: false, list_id: list_id, author_id: author_id})
t3 = Task.create!({ title: "Sign up for membership", due: Date.new, completed: false, list_id: list_id, author_id: author_id})
t4 = Task.create!({ title: "Get cash from ATM", due: Date.new, completed: false, list_id: list_id, author_id: author_id})

t1.save!
t2.save!
t3.save!
t4.save!
