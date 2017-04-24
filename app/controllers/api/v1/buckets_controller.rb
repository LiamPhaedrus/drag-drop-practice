class Api::V1::BucketsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: buckets_info
  end

  def show
    bucket = Bucket.find(params[:id])
    render json: bucket
  end


  private

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
