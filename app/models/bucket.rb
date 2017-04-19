class Bucket < ApplicationRecord
  validates :name, presence: true
  validates :size, numericality: true

  has_many :balls
end
