class List < ActiveRecord::Base
  validates :title, :due, :author, presence: true
  validates :title, uniqueness: true

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  def self.find_lists_by_author(author_id)
    User.where("author_id = ?", author_id)
  end
end
