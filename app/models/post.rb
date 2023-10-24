class Post < ApplicationRecord
  validates :title, :body, presence: true, length: { in: 5..500 }
end
