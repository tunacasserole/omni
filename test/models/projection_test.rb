require "minitest_helper"

describe "projections" do
  it "creates a projection" do
    puts "hello"
    x = Omni::Projection.create!(plan_year: "2014")
    x.plan_year.must_equal "2014"
  end
end
