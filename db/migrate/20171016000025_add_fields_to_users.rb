class AddFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :dob, :date
    add_column :users, :sex, :string
    add_column :users, :location, :string
    add_column :users, :about, :text
    add_column :users, :art_style, :string
  end
end
