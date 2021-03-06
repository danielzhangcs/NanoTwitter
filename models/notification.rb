class Notification < ActiveRecord::Base
  belongs_to :from_user, class_name: 'User'
  belongs_to :to_user, class_name: 'User'
  belongs_to :tweet

  validates :from_user_id, presence: true
  validates :to_user_id, presence: true
end
