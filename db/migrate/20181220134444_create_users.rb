class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, :limit => 64

      t.timestamps
    end
  end
end
