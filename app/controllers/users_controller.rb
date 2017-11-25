class UsersController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!

  def show
    @user = User.find_by(name: params[:name])
    @post = current_user.posts.build
    @posts = User.find_by(name: params[:name]).posts.order('created_at DESC')
  end

  def avatar
  end

  private

  def set_user
    @user = User.find_by(name: params[:name])
  end

end
