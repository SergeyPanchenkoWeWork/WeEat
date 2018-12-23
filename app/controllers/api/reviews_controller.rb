class ReviewsController < ApiController

  def create
    user = User.find_by_name(params['user_name'])

    unless user
        user = User.create({ name => params['user_name']})

        unless user
          json_error(error: 'USER_CREATE_FAILED', error_message: 'Unable to save user')
        end
    end
    review = Review.new({
                               user: User,
                               restaurant_id: params['restaurant'],
                               rating: params['rating'],
                               message: params['message'],
                           })

    if review.save
      json_response(review)
    else
      json_error(error: 'REVIEW_CREATE_FAILED', error_message: 'Unable to create review')
    end
  end

  def update
    review = Review.find(params[:id])

    if review.update_attributes({ rating: params['rating'], message: params['message'] })
      json_response(review)
    else
      json_error(error: 'REVIEW_DESTROY_FAILED', error_message: 'Unable to destroy review')
    end
  end

  def destroy
    review = Review.find(params[:id])
    if review.destroy
      json_response(true)
    else
      json_error(error: 'REVIEW_DESTROY_FAILED', error_message: 'Unable to destroy review')
    end
  end
end