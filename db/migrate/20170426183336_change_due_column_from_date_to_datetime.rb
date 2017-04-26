class ChangeDueColumnFromDateToDatetime < ActiveRecord::Migration
  def change
    change_column :tasks, :due, :datetime
  end
end
