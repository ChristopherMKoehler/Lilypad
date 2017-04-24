class Task < ActiveRecord::Base
  validates :list, :title, :due, presence: true
  validates_uniqueness_of :title, scope: :list_id

  belongs_to :list,
    class_name: 'List',
    primary_key: :id,
    foreign_key: :list_id

  has_one :author,
    through: :list
end
