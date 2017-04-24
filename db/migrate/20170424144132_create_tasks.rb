class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :list_id, null: false
      t.string :title, null: false
      t.boolean :completed, null: false, default: false
      t.date :due, null: false

      t.timestamps null: false
    end
    add_index :tasks, :list_id
  end
end
