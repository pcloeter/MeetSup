# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all


user1 = User.create(
  name: "Paul",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'number1@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
)

user2 = User.create(
  name: "Sally",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'number2@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
)


user3 = User.create(
  name: "Jim",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'number3@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
)
