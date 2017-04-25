class Task < ActiveRecord::Base
  validates :list_id, :title, :due, presence: true
  validates_uniqueness_of :title, scope: :list_id

  belongs_to :list,
    class_name: 'List',
    primary_key: :id,
    foreign_key: :list_id

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id
end
