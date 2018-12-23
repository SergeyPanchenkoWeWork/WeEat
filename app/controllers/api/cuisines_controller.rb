class Api::CuisinesController < ApiController
  def index
    json_response(Cuisine.all)
  end
end
