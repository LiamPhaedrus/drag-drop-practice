class AddSpots < ActiveRecord::Migration
  def change
    add_column :balls, :spot, :integer
  end
end
