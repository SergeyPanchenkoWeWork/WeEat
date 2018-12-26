class ChangeRestaurantsFieldNames < ActiveRecord::Migration[5.2]
  def up
    rename_column :restaurants, :maxDeliveryTime, :max_delivery_time
    rename_column :restaurants, :accept10bis, :accept_10_bis
  end

  def down
    rename_column :restaurants, :max_delivery_time, :maxDeliveryTime
    rename_column :restaurants, :accept_10_bis, :accept10bis
  end
end
