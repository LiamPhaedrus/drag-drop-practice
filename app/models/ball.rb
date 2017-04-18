class Bucket < ApplicationRecord
  validates :color, presence: true

  belongs_to :bucket
end
