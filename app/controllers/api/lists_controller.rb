class Api::ListsController < ApplicationController
  before_action :ensure_current_user

  def ensure_current_user
    unless current_user
      render json: { base: ["No one is logged in."]}
    end
  end

  def index
    @lists = current_user.lists
    if @lists
      render :index
    else
      render json: { base: ["No lists found for user."]}, status: 404
    end
  end

  def show
    @list = current_user.lists.find(params[:id])

    if @list
      render :show
    else
      render json: { base: ["List not found."] }, status: 404
    end
  end

  def create
    new_list_params = list_params
    new_list_params[:author_id] = current_user.id
    @list = List.new(new_list_params)

    if @list.save
      render :show
    else
      render json: @list.errors, status: 422
    end
  end

  def destroy
    @list = current_user.lists.find(params[:id])

    if @list
      List.destroy(params[:id])
      render :show
    else
      render json: { base: ["List not found."] }, status: 404
    end
  end

  def update
    @list = current_user.lists.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :due)
  end
end
