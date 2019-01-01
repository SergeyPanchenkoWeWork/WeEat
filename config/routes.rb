Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'app#index'

  namespace :api do
    resources :cuisines, :only => [:index]
    resources :restaurants, :only => [:index, :create]
    resources :reviews, :only => [:create, :update, :destroy]
  end

  get '*path', to: 'app#index'
end
