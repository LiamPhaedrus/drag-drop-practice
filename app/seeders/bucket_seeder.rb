class BucketSeeder
  def self.seed!
    Bucket.create(name: "one", size: 15)
    Bucket.create(name:"two", size: 10)
  end
end
