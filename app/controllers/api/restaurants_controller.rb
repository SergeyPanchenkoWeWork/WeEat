class Api::RestaurantsController < ApiController
  def index
    json_response(_search)
  end

  def create
    restaurant= Restaurant.create(restaurant_params)

    unless restaurant
      json_error(error: 'RESTAURANT_CREATE_FAILED', error_message: 'Unable to save restaurant')
    end

    json_response(restaurant)
  end

  private

  def _search
    restaurants = Restaurant.order('restaurants.created_at')
    restaurants = restaurants.where("name like ?", "%#{params[:name]}%") if params[:name].present?
    restaurants = restaurants.where(:cuisine_id => params[:cuisine]) if params[:cuisine].present?
    restaurants = restaurants.where("max_delivery_time < ?", params[:max_delivery_time]) if params[:max_delivery_time].present?
    restaurants = restaurants.left_outer_joins(:reviews).group('id')
    restaurants = restaurants.having("AVG(reviews.rating) >= ?", params[:rating]) if params[:rating].present?

    restaurants.select('"restaurants".*, AVG(reviews.rating) AS rating')
  end

  def restaurant_params
    params.require([
      :name,
      :cuisine_id,
      :max_delivery_time,
      :accept_10_bis,
      :address_lat,
      :address_lng,
      :address_name
    ])
  end
end
