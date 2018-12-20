class Restaurant < ApplicationRecord
  has_many :reviews
  belongs_to :cuisine

  validates :name, :presence => true,
            :length => { :maximum =>  64 }
end
