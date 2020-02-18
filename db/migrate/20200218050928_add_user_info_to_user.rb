class AddUserInfoToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gender, :string
    add_column :users, :city, :string
    add_column :users, :birth_month, :string
    add_column :users, :birth_day, :string
    add_column :users, :about, :string
  end
end
