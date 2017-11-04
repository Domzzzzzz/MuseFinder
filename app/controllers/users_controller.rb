class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = current_user
    @post = current_user.posts.build
    @posts = current_user.posts.order('created_at DESC')
  end

end
