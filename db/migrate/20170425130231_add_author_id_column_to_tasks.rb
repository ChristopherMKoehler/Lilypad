class AddAuthorIdColumnToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :author_id, :integer, null: false
  end
end
