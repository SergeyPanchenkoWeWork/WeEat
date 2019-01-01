class Restaurant < ApplicationRecord
  has_many :reviews
  belongs_to :cuisine

  validates :name, :presence => true,
            :length => { :maximum =>  64 }

  validates :address_name, :presence => true,
            :length => { :maximum =>  256 }

  validates :address_lat,
            numericality: { :less_than_or_equal_to => 90, :greater_than_or_equal_to  => -90 }

  validates :address_lng,
            numericality: { :less_than_or_equal_to => 180, :greater_than_or_equal_to  => -180 }
end
