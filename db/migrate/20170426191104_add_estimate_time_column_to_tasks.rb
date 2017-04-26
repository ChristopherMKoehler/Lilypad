class AddEstimateTimeColumnToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :estimate_time, :integer, default: 0
  end
end
