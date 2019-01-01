class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, :limit => 64
      t.integer :cuisine_id
      t.boolean :accept10bis, :default => false
      t.integer :maxDeliveryTime

      t.timestamps
    end
    add_index("restaurants", "cuisine_id")
    add_index("restaurants", "accept10bis")
    add_index("restaurants", "maxDeliveryTime")
  end
end
