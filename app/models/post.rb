class Post < ActiveRecord::Base

  belongs_to :user
  validates :user_id, presence: true

  validates :image, presence: true
  has_attached_file :image
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  has_many :comments, dependent: :destroy

end
