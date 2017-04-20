class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.date :due, null: false
      t.boolean :completed, default: false

      t.timestamps null: false
    end
    add_index :lists, :author_id
    add_index :lists, :title
  end
end
