class AddRestaurantsLocations < ActiveRecord::Migration[5.2]
  def change
      add_column "restaurants", "address_lat", :decimal
      add_column "restaurants", "address_lng", :decimal
      add_column "restaurants", "address_name", :string
  end
end
