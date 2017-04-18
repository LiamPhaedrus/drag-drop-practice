class Bucket < ApplicationRecord
  validates :name, presence: true
  validates :size, numericality: true
end
