class Api::TasksController < ApplicationController
  before_action :ensure_current_user

  def ensure_current_user
    unless current_user
      render json: { base: ["No one is logged in."]}
    end
  end

  def index
    if(params[:list_id])
      @tasks = Task.where("list_id = ?", params[:list_id])
    else
      @tasks = current_user.tasks
    end

    if @tasks
      render :index
    else
      render json: {}
    end
  end

  def show
    @task = current_user.tasks.find(params[:id])

    if @task
      render :show
    else
      render json: { base: ["Task not found."] }, status: 404
    end
  end

  def create
    new_task_params = task_params
    new_task_params[:author_id] = current_user.id
    @task = Task.new(new_task_params)

    if @task.save
      render :show
    else
      render json: @task.errors, status: 422
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    if @task
      Task.destroy(params[:id])
      render :show
    else
      render json: { base: ["Task not found."] }, status: 404
    end
  end

  def update
    @task = current_user.tasks.find(params[:id])

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :due, :completed, :list_id)
  end
end
