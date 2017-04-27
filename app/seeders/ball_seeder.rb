class BallSeeder
  def self.seed!
    Ball.create(color: "black")
    Ball.create(color: "red")
    Ball.create(color: "green")
    Ball.create(color: "blue")
    Ball.create(color: "purple")
    Ball.create(color: "red")
  end
end
