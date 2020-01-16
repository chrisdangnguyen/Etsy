# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'


#delete all seeds first 
User.delete_all
Product.delete_all


#creating user seeds

user1 = User.create!({email: "demo@etzieees.com", name: "Demo", password: "demo123"})
user2 = User.create!({email: "leathergoods", name: "Pia", password: "asdfghjkl"})
user3 = User.create!({email: "76ers4lyfe", name: "James", password: "asdfghjkl"})
# user4 = User.create({email: "vintagestyle", name: "Sam", password: "asdfghjkl"})
# user5 = User.create({email: "mitchup", name: "Mitch", password: "asdfghjkl"})
# user6 = User.new({email: "4evabelieber", name: "Suzie", password: "asdfghjkl"})
# user7 = User.create!({email: "queen", name: "Beyonce", password: "asdfghjkl"})
# user8 = User.create!({email: "purejewelry", name: "Theo", password: "asdfghjkl"})
# user9 = User.create!({email: "channelorange", name: "Urban", password: "asdfghjkl"})
# user10 = User.create!({email: "fashionnova", name: "Mikejones", password: "asdfghjkl"})   

#creating product seeds
product1 = Product.create!({category: "jewelry & accessories", title: "Emerald ring", description: "Beautiful emerald ring in a size 10", 
    price: 250.50, user_id: user1.id, quantity: 5 })
#     product1.avatar.attach(io: file, filename: 'this_users_avatar.jpg')
#     product1.photo.attach(io: file, filename)
#     user.avatar.attach(io: file, filename: 'this_users_avatar.jpg')

product2 = Product.create!({title: "Monogrammed Comfort Color T-shirt ", 
    description: "Short sleeves shirt with custom monogrammed pocket", 
    price: 13.00, user_id: user3.id, quantity: 9, category: "clothings & shoes"})

product3 = Product.create!({title: "Custom Settler of Catans", 
    description: "Precision laser cut form high quality birch plywood - custom theme board", 
    price: 100.00, user_id: user2.id, quantity: 3, category: "toys & entertainment"})

product4 = Product.create!({title: "Rustic Bottle Opener", 
    description: "Rustic bottle opener great for woodworking project.", 
    price: 5.99, user_id: user2.id, quantity: 7, category: "vintage"})
