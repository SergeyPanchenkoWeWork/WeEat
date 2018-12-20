class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.integer :restaurant_id
      t.integer :user_id
      t.text :message

      t.timestamps
    end

    add_index("reviews", "restaurant_id")
    add_index("reviews", "user_id")
  end
end
