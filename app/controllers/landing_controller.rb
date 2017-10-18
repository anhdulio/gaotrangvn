class LandingController < ApplicationController
  def index
    if Cat.all.size == 0
      cat = Cat.new(name:"I am a fatty cat")
      cat.save
    end
    @cats = Cat.all
  end
end
