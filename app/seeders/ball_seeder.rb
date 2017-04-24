class BallSeeder
  def self.seed!
    Ball.create(color: "black", bucket: Bucket.first)
    Ball.create(color: "red", bucket: Bucket.first)
    Ball.create(color: "green", bucket: Bucket.first)
    Ball.create(color: "blue", bucket: Bucket.first)
    Ball.create(color: "purple", bucket: Bucket.first)
    Ball.create(color: "red", bucket: Bucket.first)
  end
end
