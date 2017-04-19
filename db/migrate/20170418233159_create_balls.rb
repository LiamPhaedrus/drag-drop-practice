class CreateBalls < ActiveRecord::Migration
  def change
    create_table :balls do |t|
      t.string :color, null: false

      t.belongs_to :bucket
      t.timestamps
    end
  end
end
