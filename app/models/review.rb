class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :rating, :allow_nil => true,
            numericality: { :less_than_or_equal_to => 3, :greater_than_or_equal_to  => 0 }
  validates :message, :length => { :maximum =>  1024 }
end
