class PostsController < ApplicationController

  def index

  end

  def new
    @post = Post.new
    respond_to do |format|
      format.js
    end
  end

  def create
    @post = Post.create(post_params)
    redirect_to posts_path
  end

  private

  def post_params
    params.require(:post).permit(:image, :caption)
  end

end
