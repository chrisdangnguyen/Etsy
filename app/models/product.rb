class Product < ApplicationRecord
    validates :title, :price, :description, :quantity, :user_id, presence: true 
    validates :price, numericality: { greater_than: 0 }
    validates :quantity, numericality: { greater_than: 0 }
    validates :category, inclusion: { in: %w(jewelry & accessories, clothings & shoes, 
        home & living, toys & entertainment, art & collectibles, craft supplies, vintage)}
        # message: "Please enter a valid category"}

    belongs_to :user

    has_one_attached :photo

end
