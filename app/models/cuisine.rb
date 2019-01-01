class Cuisine < ApplicationRecord
  has_many :restaurants

  validates :name, :presence => true,
            :length => { :maximum =>  64 }
end
