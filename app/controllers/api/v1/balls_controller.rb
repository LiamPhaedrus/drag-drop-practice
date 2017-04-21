class Api::V1::BallsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: partial_balls
  end

  def show
    ball = Ball.find(params[:id])
    render json: ball
  end

  private

  def partial_balls
    balls = []
    Ball.all.each do |a_ball|
      thing = {}
      thing[:id] = a_ball.id
      thing[:color] = a_ball.color
      thing[:bucket_id] = a_ball.bucket_id
      balls << thing
    end
    balls
  end
end

# data.forEach((ball)=> {
#   console.log(ball)
# })
