class List < ActiveRecord::Base
  validates :title, :due, :author, presence: true
  validates_uniqueness_of :title, scope: :author_id

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  has_many :tasks

  def self.find_lists_by_author(author_id)
    User.where("author_id = ?", author_id)
  end
end
