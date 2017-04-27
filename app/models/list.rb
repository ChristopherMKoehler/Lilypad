class List < ActiveRecord::Base
  validates :title, :due, :author, presence: true
  validates_uniqueness_of :title, scope: :author_id
  validate :date_not_before_now, on: [:create, :update]


  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  has_many :tasks,
    class_name: 'Task',
    primary_key: :id,
    foreign_key: :list_id,
    dependent: :delete_all

  def date_not_before_now
    if due.present? && due < Date.today
     errors.add(:due, "can't be in the past")
    end
  end

  def self.find_lists_by_author(author_id)
    User.where("author_id = ?", author_id)
  end
end
