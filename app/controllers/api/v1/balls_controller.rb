class Api::V1::BallsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: partial_balls
  end

  def show
    ball = Ball.find(params[:id])
    render json: ball
  end

  def update
    ball = Ball.find(update_params['id'])
    if ball.update!(bucket_id: params['bucket_id'])
      render json: {
        status: 201,
        message: ("successfully moved a ball"),
        balls: partial_balls,
        buckets: buckets_info
      }.to_json
    else
      render json: {
        status: 500,
        error: ball.errors
      }.to_json
    end
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

  def update_params
    params.require(:ball).permit(:id, :bucket_id)
  end

  def buckets_info
    buckets = []
    Bucket.all.each do |bucket|
      thing = {}
      thing[:id] = bucket.id
      thing[:name] = bucket.name
      thing[:size] = bucket.size
      thing[:balls] = bucket.balls.pluck(:id)
      buckets << thing
    end
    buckets
  end
end
