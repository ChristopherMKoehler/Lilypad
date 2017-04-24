class Task < ActiveRecord::Base
  validates :list, :title, :due, :completed, presence: true
  validates_uniqueness_of :title, scope: :list_id

  belongs_to :list,
    class_name: 'List',
    primary_key: :id,
    foreign_key: :list_id
end
