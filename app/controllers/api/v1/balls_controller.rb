class Api::V1::BallsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Ball.all
  end

  def show
    ball = Ball.find(params[:id])
    render json: ball
  end
end
