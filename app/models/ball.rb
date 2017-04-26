class Ball < ApplicationRecord
  validates :color, presence: true
  # validates :spot, inclusion: { in: () }, allow_nil: true, numericality: { only_integer: true }

  belongs_to :bucket

end
