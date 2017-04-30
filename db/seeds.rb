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


groceries = List.create!({ title: "Buy Groceries", due: Date.new(2018,2,3) , author_id: author_id})
list_id = groceries.id

Task.create!({ title: "Buy Milk", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Buy Bread", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Buy Steak", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Buy Lettuce", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Buy Shampoo", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Sign up for membership", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Get cash from ATM", due: DateTime.new(2018,2,3,4,5,6), completed: false, list_id: list_id, estimate_time: 2, author_id: author_id})


bday = List.create!({ title: "Mom's Birthday", due: Date.new(2018, 11, 13) , author_id: author_id})

Task.create!({ title: "Buy Balloons", due: DateTime.new(2018,10,3,4,5,6), completed: false, list_id: bday.id, estimate_time: 30, author_id: author_id})
Task.create!({ title: "Make Dinner Reservations at the steakhouse", due: DateTime.new(2018,10,3,4,5,6), completed: false, list_id: bday.id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Pick up the cake from the bakery", due: DateTime.new(2018,10,3,4,5,6), completed: false, list_id: bday.id, estimate_time: 30, author_id: author_id})
Task.create!({ title: "Wrap present", due: DateTime.new(2018,10,3,4,5,6), completed: false, list_id: bday.id, estimate_time: 30, author_id: author_id})

study = List.create!({ title: "Study for the Physics Exam", due: Date.new(2018, 9, 12) , author_id: author_id})

Task.create!({ title: "Re-read chapters 10-12", due: DateTime.new(2018,8,3,4,5,6), completed: true, list_id: study.id, estimate_time: 45, author_id: author_id})
Task.create!({ title: "Memorize the Schrodinger Equation", due: DateTime.new(2018,8,3,4,5,6), completed: false, list_id: study.id, estimate_time: 2, author_id: author_id})
Task.create!({ title: "Call Kyle to ask him for his index cards", due: DateTime.new(2018,8,3,4,5,6), completed: false, list_id: study.id, estimate_time: 30, author_id: author_id})

aA = List.create!({ title: "Apply to App Academy", due: Date.new(2018, 7, 18) , author_id: author_id})

Task.create!({ title: "Learn Ruby", due: DateTime.new(2018,5,3,1,0,0), completed: true, list_id: aA.id, estimate_time: 120, author_id: author_id})
Task.create!({ title: "Learn how to use the command line", due: DateTime.new(2018,5,20,4,0,0), completed: false, list_id: aA.id, estimate_time: 45, author_id: author_id})
Task.create!({ title: "Schedule the first interview", due: DateTime.new(2018,7,1,12,0,6), completed: false, list_id: aA.id, estimate_time: 5, author_id: author_id})
Task.create!({ title: "Pray you get in", due: DateTime.new(2018,7,18,12,0,6), completed: false, list_id: aA.id, estimate_time: 30, author_id: author_id})

shed = List.create!({ title: "Repair the shed", due: Date.new(2018, 6, 1) , author_id: author_id})

Task.create!({ title: "Buy Nails", due: DateTime.new(2018,5,29,3,0,0), completed: true, list_id: shed.id, estimate_time: 5, author_id: author_id})
Task.create!({ title: "Buy Planks", due: DateTime.new(2018,5,29,3,0,0), completed: true, list_id: shed.id, estimate_time: 5, author_id: author_id})
Task.create!({ title: "Buy Paint", due: DateTime.new(2018,5,29,3,0,0), completed: true, list_id: shed.id, estimate_time: 5, author_id: author_id})
Task.create!({ title: "Tear off rotting wood", due: DateTime.new(2018,5,29,4,0,0), completed: false, list_id: shed.id, estimate_time: 20, author_id: author_id})
Task.create!({ title: "Spray carpenter bee repellent", due: DateTime.new(2018,5,29,4,0,0), completed: false, list_id: shed.id, estimate_time: 2, author_id: author_id})


travel = List.create!({ title: "Plan Vacation to Ukraine", due: Date.new(2018, 10, 1) , author_id: author_id})

Task.create!({ title: "Get plane tickets", due: DateTime.new(2018,9,29,3,0,0), completed: true, list_id: travel.id, estimate_time: 20, author_id: author_id})
Task.create!({ title: "Reserve a rental car", due: DateTime.new(2018,9,29,4,0,0), completed: false, list_id: travel.id, estimate_time: 10, author_id: author_id})
Task.create!({ title: "Surprise Lisa with the news!", due: DateTime.new(2018,9,30,3,0,0), completed: false, list_id: travel.id, estimate_time: 10, author_id: author_id})

spanish = List.create!({ title: "Learn to Speak Spanish", due: Date.new(2018, 1, 1) , author_id: author_id})

Task.create!({ title: "Learn basic vocabulary", due: DateTime.new(2018,5,1,3,0,0), completed: false, list_id: spanish.id, estimate_time: 300, author_id: author_id})
Task.create!({ title: "Learn conjugation", due: DateTime.new(2018,6,1,3,0,0), completed: false, list_id: spanish.id, estimate_time: 300, author_id: author_id})
Task.create!({ title: "Learn proper pronunciation", due: DateTime.new(2018,8,1,3,0,0), completed: false, list_id: spanish.id, estimate_time: 300, author_id: author_id})
Task.create!({ title: "Buy Textbook", due: DateTime.new(2018,9,1,4,0,0), completed: false, list_id: spanish.id, estimate_time: 20, author_id: author_id})
Task.create!({ title: "Subscribe to Spanish newspaper", due: DateTime.new(2018,11,1,4,0,0), completed: false, list_id: spanish.id, estimate_time: 2, author_id: author_id})

music = List.create!({ title: "Make a playlist for road trip to Utah", due: Date.new(2018, 8, 20) , author_id: author_id})

Task.create!({ title: "Willie Nelson songs", due: DateTime.new(2018,8,20,3,0,0), completed: true, list_id: music.id, estimate_time: 20, author_id: author_id})
Task.create!({ title: "Megadeth songs", due: DateTime.new(2018,8,20,3,0,0), completed: false, list_id: music.id, estimate_time: 20, author_id: author_id})
Task.create!({ title: "Frank Sinatra", due: DateTime.new(2018,8,20,3,0,0), completed: false, list_id: music.id, estimate_time: 20, author_id: author_id})

burger = List.create!({ title: "Craft the best burger", due: Date.new(2018,4,29) , author_id: author_id})

Task.create!({ title: "Make a brioche bun and toast it with butter", due: DateTime.new(2018,4,29,3,0,0), completed: false, list_id: burger.id, estimate_time: 60, author_id: author_id})
Task.create!({ title: "Cook Wagyu beer patty medium-rare", due: DateTime.new(2018,4,29,3,0,0), completed: false, list_id: burger.id, estimate_time: 10, author_id: author_id})
Task.create!({ title: "Plate with garlic aioli", due: DateTime.new(2018,4,29,3,0,0), completed: false, list_id: burger.id, estimate_time: 5, author_id: author_id})

dog = List.create!({ title: "Adopt a doggo", due: Date.new(2018,6,1) , author_id: author_id})

Task.create!({ title: "Research big dog breeds", due: DateTime.new(2018,6,1,3,0,0), completed: false, list_id: dog.id, estimate_time: 30, author_id: author_id})
Task.create!({ title: "Buy dog food and a collar", due: DateTime.new(2018,6,1,3,0,0), completed: false, list_id: dog.id, estimate_time: 10, author_id: author_id})
Task.create!({ title: "Pick up new best friend", due: DateTime.new(2018,6,1,3,0,0), completed: false, list_id: dog.id, estimate_time: 20, author_id: author_id})
Task.create!({ title: "Give new best friend his shots", due: DateTime.new(2018,6,1,3,0,0), completed: false, list_id: dog.id, estimate_time: 45, author_id: author_id})
