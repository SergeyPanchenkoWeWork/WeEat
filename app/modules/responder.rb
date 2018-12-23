module Responder
  def json_response(data)
    render json: { data: data }
  end

  def json_error(
      error: '',
      error_code: '400',
      error_message: '',
  )
    render json: {
        error: error,
        message: error_message,
        status: error_code,
    }
  end
end