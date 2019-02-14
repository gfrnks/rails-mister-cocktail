class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient, dependent: :destroy
  validates :description, presence: true
  validates_uniqueness_of :ingredient, scope: [:cocktail]
end
