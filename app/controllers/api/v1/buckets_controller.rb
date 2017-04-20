class Api::V1::BucketsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Bucket.all
  end

  def show
    bucket = Bucket.find(params[:id])
    render json: bucket
  end
end
