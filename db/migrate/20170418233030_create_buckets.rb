class CreateBuckets < ActiveRecord::Migration
  def change
    create_table :buckets do |t|
      t.string :name, null: false
      t.integer :size, null: false

      t.timestamps
    end
  end
end
