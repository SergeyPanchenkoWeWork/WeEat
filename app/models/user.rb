class User < ApplicationRecord
  has_many :reviews

  validates :name, :presence => true,
            :length => { :maximum =>  64 }
end
